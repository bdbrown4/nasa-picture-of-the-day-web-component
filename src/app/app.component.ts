import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureOfTheDay } from './models/picture-of-the-day.interface';
import { NasaApiServiceService } from './services/nasa-api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  dataForComponents$: Observable<PictureOfTheDay> | undefined = undefined;
  constructor(private nasaApiService: NasaApiServiceService) {
    
  }

  retrieveDataForComponents() {
    this.dataForComponents$ = this.nasaApiService.getImageData();
  }
}
