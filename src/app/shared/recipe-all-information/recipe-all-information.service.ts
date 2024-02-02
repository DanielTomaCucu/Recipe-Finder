import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, finalize, map, tap } from 'rxjs';
import { ApiService } from 'src/app/api.service';

@Injectable({
  providedIn: 'root',
})
export class RecipeAllInformationService {
  constructor(private apiService: ApiService) {}

  private recipeSubject = new BehaviorSubject<any[]>([]);
  recipes$ = this.recipeSubject.asObservable();

  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$ = this.loadingSubject.asObservable();


  searchRecipes(recipeId: string): void {
    const params = { ids: recipeId };

    // Set loading to true before making the API call
    this.loadingSubject.next(true);

    this.apiService.getApiData('informationBulk', params).subscribe(
      (data: any) => {
         if (data && data.length > 0) {
           const recipe = data[0]; // Access the first object in the array
           this.recipeSubject.next(recipe); // Emit the single recipe object
         } else {
           // Handle the case where data is empty or not as expected
           console.error('No data received or unexpected data structure');
         }
        // Update the BehaviorSubject with new data
        this.loadingSubject.next(false); // Set loading to false when API call is complete
      },
      (error) => {
        console.error(error);
        this.loadingSubject.next(false); // Set loading to false in case of an error
      }
    );
  }
}
