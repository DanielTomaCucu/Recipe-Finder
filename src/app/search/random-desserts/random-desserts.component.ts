import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-random-desserts',
  templateUrl: './random-desserts.component.html',
  styleUrls: [
    './random-desserts.component.scss',
    '../random-recipes/random-recipes.component.scss',
  ],
})
export class RandomDessertsComponent implements OnInit {
  constructor(private apiService: ApiService, private router: Router) {}
  randomDeserts: any = '';
  ngOnInit() {
    const apiUrl = 'random';

     this.apiService
      .getApiData(apiUrl, { number: 10, tags: 'dessert' })
      .subscribe((data) => {
        console.log(data), (this.randomDeserts = data);
      }); 
  }

  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
}
