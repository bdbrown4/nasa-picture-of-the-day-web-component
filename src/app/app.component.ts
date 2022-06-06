import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { PictureOfTheDay } from './models/picture-of-the-day.interface';
import { Actions } from './redux/actions/fetch-nasa-image-action';
import { AppState } from './redux/state/AppState';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Select(AppState.pictureOfTheDay) dataForComponents$: Observable<PictureOfTheDay> | undefined;
  @Select(AppState.loading) loading$: Observable<boolean> | undefined;
  constructor(private store: Store) { }

  retrieveDataForComponents() {
    this.store.dispatch(Actions.Loading);
    this.store.dispatch(Actions.Get);
  }
}
