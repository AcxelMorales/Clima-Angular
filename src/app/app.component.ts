import { Component, OnInit } from '@angular/core';

import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  weather;

  constructor(private service: WeatherService) { }

  getWeather(city, country) {
    this.service.getWeather(city, country)
      .subscribe(
        resp => this.weather = resp,
        err => console.log(err)
      )
  }

  submitLocation(city: HTMLInputElement, country: HTMLInputElement) {

    if (city.value && country.value) {
      this.getWeather(city.value, country.value);

      city.value = '';
      country.value = '';
    } else {
      alert('Please. Insert some values');
    }
    city.focus();

    return false;
  }
}
