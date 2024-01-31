import { Component } from '@angular/core';
import { CUISINES } from './cusines';
import { SelectedCusinseService } from '../shared/selected-cusinse.service';
import { ApiService } from '../api.service';
import { SearchService } from './search.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  presentingElement: any = null;
  cuisines: string[] = CUISINES;
  selectedCuisines: string[] = [];
  searchQuery: string = '';

  constructor(
    public selectedCuisineService: SelectedCusinseService,
    private searchService: SearchService,
    private router: Router
  ) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.selectedCuisines = this.selectedCuisineService.getSelectedCuisines();
  }

  onCuisineChange(cuisine: string, isChecked: boolean) {
    if (isChecked) {
      this.selectedCuisines.push(cuisine);
    } else {
      this.selectedCuisines = this.selectedCuisines.filter(
        (c) => c !== cuisine
      );
    }
    this.selectedCuisineService.setSelectedCuisines(this.selectedCuisines);
  }

  search() {
    this.searchService.searchRecipes(this.searchQuery, this.selectedCuisines);
    this.router.navigateByUrl('search/cuisines');
  }
}
