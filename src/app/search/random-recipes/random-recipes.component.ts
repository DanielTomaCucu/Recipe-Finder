import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPage } from '../search.page';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss'],
})
export class RandomRecipesComponent implements OnInit, OnDestroy {
  recipes: any = '';
  subscription: Subscription = new Subscription();
  constructor(private apiService: ApiService, private router: Router) {
    this.subscription.add(
      SearchPage.refreshDataSubject.subscribe({
        next: () => {
          this.getRandomRecipes();
        },
      })
    );
  }

  ngOnInit() {
    this.getRandomRecipes();
  }

  getRandomRecipes() {
    const endpoint = 'recipes/random?number=10';
    this.subscription.add(
      this.apiService.getApiData(endpoint).subscribe(
        (data) => {
          this.recipes = data;
        },
        (error) => console.log(error)
      )
    );
  }
  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
