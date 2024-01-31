import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apiService: ApiService) {}

  private recipeSubject = new BehaviorSubject<any>(null);
  recipes$ = this.recipeSubject.asObservable();
  searchRecipes(searchQuery: string, selectedCuisines: string[]) {
    const params = {
      query: searchQuery,
      cuisine: selectedCuisines,
      addRecipeInformation: true,
      number: 15,
    };
    this.apiService.getApiData('complexSearch', params).subscribe((data) => {
      console.log(data), this.recipeSubject.next(data);
    });
  }
}
