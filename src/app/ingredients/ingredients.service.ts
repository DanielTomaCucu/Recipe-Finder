import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  subscription: Subscription = new Subscription();
  constructor(private apiService: ApiService) {}

  autoComplete(userInput:string):Observable<any> {
    const apiUrl = 'food/ingredients/autocomplete';
    return this.apiService.getApiData(apiUrl, { query: userInput, number: 7 });
  }
}
