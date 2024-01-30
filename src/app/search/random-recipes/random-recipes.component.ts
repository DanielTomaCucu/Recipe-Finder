import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-random-recipes',
  templateUrl: './random-recipes.component.html',
  styleUrls: ['./random-recipes.component.scss'],
})
export class RandomRecipesComponent implements OnInit {
   recipes: any = '';
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getRandomRecipes()
  }

  getRandomRecipes() {
    const endpoint = 'recipes/random?number=6';
    this.apiService.getApiData(endpoint).subscribe(
      (data) => {
        console.log(data);
        this.recipes = data;
      },
      (error) => console.log(error)
    );
  }
}
