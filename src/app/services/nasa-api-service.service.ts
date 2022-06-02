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
    return this.httpClient.get<PictureOfTheDay>("https://jrlr3yszy3rp2wvaev7zmp5hh40bqhfc.lambda-url.us-east-1.on.aws/");
  }
}
