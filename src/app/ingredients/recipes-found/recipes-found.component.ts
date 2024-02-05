import { Component, OnInit } from '@angular/core';
import { RecipesFoundService } from './recipes-found.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes-found',
  templateUrl: './recipes-found.component.html',
  styleUrls: ['./recipes-found.component.scss'],
})
export class RecipesFoundComponent implements OnInit {
  recipes$: Observable<any> = new Observable<any>();
  constructor(
    private recipesFounfService: RecipesFoundService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipes$ = this.recipesFounfService.getRecipesByIngredients();
  }
  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
}
