import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environments.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiKey = environment.apiKey;
  private apiHost = 'https://api.spoonacular.com';

  constructor(private http: HttpClient) {}

  getApiData(endpoint: string, params?: any):Observable<any> {
    const url = `${this.apiHost}/${endpoint}`;
    const queryParams = { ...params, apiKey: this.apiKey };

    return this.http.get(url, { params: queryParams });
  }
}
