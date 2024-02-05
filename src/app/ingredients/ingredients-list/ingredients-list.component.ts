import { Component, OnInit } from '@angular/core';
import { IngredientsService } from '../ingredients.service';
import { Ingredient } from 'src/app/interfaces/ingredients';

@Component({
  selector: 'app-ingredients-list',
  templateUrl: './ingredients-list.component.html',
  styleUrls: ['./ingredients-list.component.scss'],
})
export class IngredientsListComponent implements OnInit {
  checkedIngredients: Ingredient[] = [];
  constructor(private ingredientsService: IngredientsService) {}

  ngOnInit() {
    this.ingredientsService.checkedIngredients$.subscribe((ingredients) => {
      this.checkedIngredients = ingredients;
    });
  }

  removeOneIngredient(ingredient: any) {
    this.ingredientsService.removeIngredient(ingredient);
  }
  removeAllIngredinets() {
    this.ingredientsService.clearCheckedIngredients();
  }
}
