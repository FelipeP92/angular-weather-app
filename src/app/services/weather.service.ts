import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiKey: String = '6002ffc7d1ad455f239bcdbb76994ae9'
  URI: String = ''

  constructor(private httpClient:HttpClient) { 
    this.URI = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`
  }

  getWeather(cityName, countryCode) {
    return  this.httpClient.get(`${this.URI}${cityName},${countryCode}`)
  }

}
