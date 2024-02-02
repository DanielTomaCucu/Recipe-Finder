import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IngredientsService } from './ingredients.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss'],
})
export class IngredientsComponent implements OnInit {
  autoCompleteResults$: Observable<any> | null = null;
  searchControl = new FormControl('');

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
          this.autoCompleteResults$ = null; // Optionally hide results if query is too short
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
      this.autoCompleteResults$ = null; // Hide the autocomplete results
    }
  }
  hideAutocompleteResults() {
    this.autoCompleteResults$ = null; // Adjust as needed to hide or clear results
  }
}
