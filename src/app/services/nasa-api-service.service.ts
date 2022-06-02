import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PictureOfTheDay } from '../models/picture-of-the-day.interface';

@Injectable({
  providedIn: 'root'
})
export class NasaApiServiceService {

  constructor(private httpClient: HttpClient) { }

  getImageData(): Observable<PictureOfTheDay> {
    return this.httpClient.get<PictureOfTheDay>("https://api.nasa.gov/planetary/apod?api_key=yAvjK1fEnxibIkkwk8zHGpd7WzCFLIEVv8bZtZei");
  }
}
