import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SearchPage } from '../search.page';

@Component({
  selector: 'app-random-desserts',
  templateUrl: './random-desserts.component.html',
  styleUrls: [
    './random-desserts.component.scss',
    '../random-recipes/random-recipes.component.scss',
  ],
})
export class RandomDessertsComponent implements OnInit, OnDestroy {
  randomDeserts: any = '';
  subscription: Subscription = new Subscription();
  constructor(private apiService: ApiService, private router: Router) {
    this.subscription.add(
      SearchPage.refreshDataSubject.subscribe({
        next: () => {
          this.getDesserts();
        },
      })
    );
  }

  ngOnInit() {
    //this.getDesserts();
  }

  getDesserts() {
    const apiUrl = 'random';
    this.subscription.add(
      this.apiService
        .getApiData(apiUrl, { number: 10, tags: 'dessert' })
        .subscribe((data) => {
          console.log(data), (this.randomDeserts = data);
        })
    );
  }

  redirectToRecipe(id: string) {
    this.router.navigateByUrl('recipe-details/' + id);
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
