import { Component } from '@angular/core';
import { CUISINES } from './cusines';
import { SelectedCusinseService } from '../shared/selected-cusinse.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss'],
})
export class SearchPage {
  presentingElement: any = null;
  cuisines: string[] = CUISINES;
  selectedCuisines: string[] = [];

  constructor(public selectedCuisineService: SelectedCusinseService) {}

  ngOnInit() {
    this.presentingElement = document.querySelector('.ion-page');
    this.selectedCuisines = this.selectedCuisineService.getSelectedCuisines();
  }

  onModalClose() {
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
    console.log(this.selectedCuisines)
    this.selectedCuisineService.setSelectedCuisines(this.selectedCuisines);
  }
}
