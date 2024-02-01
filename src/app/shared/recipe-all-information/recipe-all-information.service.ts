import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, map, tap } from 'rxjs';
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

  searchRecipes(recipeId: string): Observable<any> {
    if (this.loadingSubject.value) return EMPTY;

    this.loadingSubject.next(true);
    const params = { ids: recipeId };

    return this.apiService.getApiData('informationBulk', params).pipe(
      map((data:any) => data[0] || {}),
      tap((recipe) => {
        this.recipeSubject.next([recipe]);
        this.loadingSubject.next(false);
      })
    );
  }
}
