import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedCusinseService {
  constructor() {}
  private selectedCuisines: string[] = [];

  setSelectedCuisines(cuisines: string[]) {
    this.selectedCuisines = cuisines;
  }

  getSelectedCuisines(): string[] {
    return this.selectedCuisines;
  }

  isCuisineSelected(cuisine: string): boolean {
    return this.selectedCuisines.includes(cuisine);
  }
}
