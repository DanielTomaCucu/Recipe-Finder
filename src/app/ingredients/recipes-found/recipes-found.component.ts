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
  recipes$: Observable<any> = new Observable<[]>();
  isLoading = true;
  constructor(
    private recipesFoundService: RecipesFoundService,
    private router: Router
  ) {}

  ngOnInit() {
    this.recipes$ = this.recipesFoundService.getRecipesByIngredients();
    this.recipes$.subscribe({
      next: (data) => {
        console.log(data);
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }
  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }

}
