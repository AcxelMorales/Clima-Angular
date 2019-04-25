import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private key: string = '7b53a249f3f179c9a4fd947524ea30bd';
  private URI: string;

  constructor(private httpClient: HttpClient) {
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.key}&units=metric&q=`;
  }

  getWeather(city: string, country: string) {
    return this.httpClient.get(`${this.URI}${city},${country}`);
  }
}
