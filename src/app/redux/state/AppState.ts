import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { PictureOfTheDay } from "src/app/models/picture-of-the-day.interface";
import { NasaApiService } from "src/app/services/nasa-api-service.service";
import { Actions } from "../actions/fetch-nasa-image-action";
import { AppStateModel } from "./AppStateModel.interface";

@State<AppStateModel>({
    name: 'appstate',
    defaults: {
      imageUrl: undefined,
      explanation: undefined,
      loading: false
    }
  })
@Injectable()
export class AppState {
    constructor(private nasaFetchImageService: NasaApiService) { }
    @Action(Actions.Get)
    getImageOfTheDay(ctx: StateContext<AppStateModel>, action: Actions.Get) {
      return this.nasaFetchImageService.getImageData().pipe(
        tap((imageResult: PictureOfTheDay) => {
          const state = ctx.getState();
          ctx.setState({
            ...state,
            imageUrl: imageResult.url,
            explanation: imageResult.explanation,
            loading: false
          });
        })
      );
    }
    @Action(Actions.Loading)
    loadingImageOfTheDay(ctx: StateContext<AppStateModel>, action: Actions.Loading) {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          loading: true
        });
        return state;
    }
    @Selector()
    static pictureOfTheDay(state: AppStateModel) {
        return { explanation: state.explanation, url: state.imageUrl, loading: false } as PictureOfTheDay;
    }
    @Selector()
    static loading(state: AppStateModel) {
        return state.loading;
    }
}