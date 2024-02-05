import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IngredientsService } from './ingredients.service';
import { Ingredient } from '../interfaces/ingredients';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  autoCompleteResults$: Observable<any> | null = null;
  searchControl = new FormControl('');
  segmentValue = 'ingredients';

  constructor(
    private ingredientsService: IngredientsService,
    private elRef: ElementRef
  ) {}

  ngOnInit() {
    this.searchControl.valueChanges
      .pipe(debounceTime(500), distinctUntilChanged())
      .subscribe((searchQuery) => {
        if (searchQuery && searchQuery.length >= 3) {
          this.search(searchQuery);
        } else {
          this.autoCompleteResults$ = null;
        }
      });
  }

  search(searchQuery: string) {
    this.autoCompleteResults$ =
      this.ingredientsService.autoComplete(searchQuery);
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elRef.nativeElement.contains(event.target)) {
      this.autoCompleteResults$ = null; 
    }
  }
  hideAutocompleteResults() {
    this.autoCompleteResults$ = null;
  }

  toggleCheckbox(ingredient: Ingredient) {
    ingredient.checked = !ingredient.checked;
    this.ingredientsService.toggleIngredient(ingredient);
  }
}
