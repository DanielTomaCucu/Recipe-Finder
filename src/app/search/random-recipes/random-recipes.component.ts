import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss'],
})
export class RandomRecipesComponent implements OnInit {
  recipes: any = '';
  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.getRandomRecipes();
  }

  getRandomRecipes() {
    const endpoint = 'random?number=10';
    this.apiService.getApiData(endpoint).subscribe(
      (data) => {
        this.recipes = data;
      },
      (error) => console.log(error)
    );
  }
  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
}
