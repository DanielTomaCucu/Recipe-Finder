import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apiService: ApiService) {}

  searchRecipes(searchQuery: string, selectedCuisines: string[]) {
    const params = {
      query: searchQuery,
      cuisine: selectedCuisines,
      addRecipeInformation: true,
      number: 15,
    };
    this.apiService
      .getApiData('complexSearch', params)
      .subscribe((data) => console.log(data));
  }
}
