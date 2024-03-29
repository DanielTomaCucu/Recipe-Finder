import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject, Observable } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(private apiService: ApiService) {}
  offset = 0;
   allDataLoaded = false;

  public searchQuery: string = '';
  public selectedCuisines: string[] = [];

  private recipeSubject = new BehaviorSubject<any[]>([]);
  recipes$ = this.recipeSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();

  searchRecipes(searchQuery: string, selectedCuisines: string[]) {
    if (this.loadingSubject.value || this.allDataLoaded) return;

    this.loadingSubject.next(true);
    const params = {
      query: searchQuery,
      cuisine: selectedCuisines.join(','),
      addRecipeInformation: true,
      number: 20,
      offset: this.offset,
    };
    this.apiService.getApiData('recipes/complexSearch', params).subscribe({
      next: (data: any) => {
        if (
          data.offset + data.number <= this.offset ||
          data.totalResults <= this.offset ||
          !data
        ) {
          this.allDataLoaded = true;
          console.log(data.totalResults, this.offset, this.allDataLoaded);
          this.loadingSubject.next(false);
          return;
        }

        const currentRecipes = this.recipeSubject.value;
        const newRecipes = [...currentRecipes, ...data.results];
        this.recipeSubject.next(newRecipes);
        this.offset += data.number;
        this.loadingSubject.next(false);
        console.log(newRecipes, currentRecipes);
      },

      error: (err) => {
        console.error(err);
        this.loadingSubject.next(false);
      },
    });
  }

  resetData() {
    this.recipeSubject.next([]);
    this.offset = 0;
    this.allDataLoaded = false;
  }
}
