import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WineService {
  constructor(private apiService: ApiService) {}

  getWine(wine: string): Observable<any> {
    let url = 'food/wine/dishes';
    return this.apiService.getApiData(url, { wine: wine });
  }
  getDishByWine(dish: string): Observable<any> {
    let url = 'recipes/complexSearch';
    return this.apiService.getApiData(url, {
      query: dish,
      number: 10,
      addRecipeInformation: true,
    });
  }
}
