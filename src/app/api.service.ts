import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './environments/environments.prod';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiHost = 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getApiData(endpoint: string, params?: any) {
    const url = `https://${this.apiHost}/${endpoint}`;

    let headers = new HttpHeaders({
      'X-RapidAPI-Key': this.apiKey,
      'X-RapidAPI-Host': this.apiHost,
    });

    return this.http.get(url, { headers, params });
  }
}
