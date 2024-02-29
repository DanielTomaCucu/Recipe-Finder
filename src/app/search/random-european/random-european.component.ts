import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { ApiService } from 'src/app/api.service';
import { SearchPage } from '../search.page';

@Component({
  selector: 'app-random-european',
  templateUrl: './random-european.component.html',
  styleUrls: [
    './random-european.component.scss',
    '../random-recipes/random-recipes.component.scss',
  ],
})
export class RandomEuropeanComponent implements OnInit, OnDestroy {
  randomEuropean: any = '';
  subscription: Subscription = new Subscription();
  constructor(private apiService: ApiService, private router: Router) {
    this.subscription.add(
      SearchPage.refreshDataSubject.subscribe({
        next: () => {
          this.getEuropenFood();
        },
      })
    );
  }

  ngOnInit() {
   this.getEuropenFood();
  }
  getEuropenFood() {
    const apiUrl = 'recipes/random/';
    this.subscription.add(
      this.apiService
        .getApiData(apiUrl, { number: 10, tags: 'european' })
        .subscribe((data) => {
          this.randomEuropean = data;
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
