import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { Ingredient } from '../interfaces/ingredients';

@Injectable({
  providedIn: 'root',
})
export class IngredientsService {
  private checkedIngredientsSource = new BehaviorSubject<Ingredient[]>([]);

  subscription: Subscription = new Subscription();
  constructor(private apiService: ApiService) {
    const initialState = this.loadCheckedIngredients();
    this.checkedIngredientsSource = new BehaviorSubject<Ingredient[]>(
      initialState
    );
  }

  get checkedIngredients$(): Observable<Ingredient[]> {
    return this.checkedIngredientsSource.asObservable();
  }

  autoComplete(userInput: string): Observable<any> {
    const apiUrl = 'food/ingredients/autocomplete';
    return this.apiService.getApiData(apiUrl, { query: userInput, number: 7 });
  }

  toggleIngredient(ingredient: Ingredient) {
    const currentIngredients = this.checkedIngredientsSource.getValue();
    const index = currentIngredients.findIndex(
      (ing) => ing.name === ingredient.name
    );
    let updatedIngredients = [];
    if (index === -1) {
      // Add ingredient
      updatedIngredients = [...currentIngredients, ingredient];
    } else {
      // Remove ingredient
      updatedIngredients = currentIngredients.filter(
        (ing) => ing.name !== ingredient.name
      );
    }

    this.checkedIngredientsSource.next(updatedIngredients);
    this.saveCheckedIngredients(updatedIngredients);
  }

  private saveCheckedIngredients(ingredients: Ingredient[]) {
    localStorage.setItem('checkedIngredients', JSON.stringify(ingredients));
  }

  private loadCheckedIngredients(): Ingredient[] {
    const data = localStorage.getItem('checkedIngredients');
    return data ? JSON.parse(data) : [];
  }
  removeIngredient(ingredientToRemove: Ingredient) {
    const currentIngredients = this.checkedIngredientsSource.getValue();
    const updatedIngredients = currentIngredients.filter(
      (ingredient) => ingredient.name !== ingredientToRemove.name
    );
    this.checkedIngredientsSource.next(updatedIngredients);
    this.saveCheckedIngredients(updatedIngredients);
  }


  clearCheckedIngredients() {
    this.checkedIngredientsSource.next([]);
    localStorage.removeItem('checkedIngredients'); 
  }
}
