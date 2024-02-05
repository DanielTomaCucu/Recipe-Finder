import { Component, OnInit } from '@angular/core';
import { wineCategories } from '../shared/all-wine';
import { WineService } from './wine.service';
import { Observable, catchError, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wine',
  templateUrl: './wine.component.html',
  styleUrls: ['./wine.component.scss'],
})
export class WineComponent implements OnInit {
  searchQuery = '';
  allWines: string[] = [];
  filteredWines: string[] = [];
  wineResults$!: Observable<any>;
  dish$: Observable<any> | undefined;

  constructor(private wineService: WineService, private router: Router) {}

  ngOnInit() {
    this.allWines = this.flattenWineCategories(wineCategories);
    this.filteredWines = [...this.allWines];
  }

  onSearchChange() {
    this.filteredWines = this.searchQuery
      ? this.allWines.filter((wine) =>
          wine.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      : [...this.allWines];
  }

  flattenWineCategories(wineCategories: any): string[] {
    let flattened: string[] = [];
    Object.values(wineCategories).forEach((category) => {
      Object.values(category as { [key: string]: string[] }).forEach(
        (wines) => {
          if (Array.isArray(wines)) {
            flattened = [...flattened, ...wines];
          }
        }
      );
    });
    return flattened;
  }

  getWine(wine: string) {
    this.wineResults$ = this.wineService.getWine(wine).pipe(
      tap((data) => {
        if (data.pairings && data.pairings.length > 0) {
          this.getDish(data.pairings[0]);
          this.searchQuery = '';
        }
      }),
      catchError((error) => {
        console.error('Failed to fetch wine pairings:', error);
         this.searchQuery = '';
        return [];
      })
    );
  }
  getDish(pairing: string) {
    this.dish$ = this.wineService.getDishByWine(pairing);
  }
  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
}
