import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root'
})
export class RecipesFoundService {

  constructor(private apiService: ApiService) {


  }

  getingFromLocalStorage() {
  const ingString = localStorage.getItem('checkedIngredients');
    if (ingString) {
      const ingredients = JSON.parse(ingString);
      return ingredients.map((ingredient: any) => ingredient.name);
    }
    return [];
  }


  getRecipesByIngredients() :Observable<any>{
    const url = 'recipes/findByIngredients';
    const params = {
      ingredients: this.getingFromLocalStorage().join(','),
      number: 5,
      ranking:2
    };

    return this.apiService.getApiData(url, params);

  }
}
