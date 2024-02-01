import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';


@Component({
  selector: 'app-random-european',
  templateUrl: './random-european.component.html',
  styleUrls: [
    './random-european.component.scss',
    '../random-recipes/random-recipes.component.scss',
  ],
})
export class RandomEuropeanComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  randomEuropean: any = '';
  ngOnInit() {
    const apiUrl = 'random';
    this.apiService
      .getApiData(apiUrl, { number: 10, tags: 'european' })
      .subscribe((data) => {
        this.randomEuropean = data;
      }); 
  }

  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
}
