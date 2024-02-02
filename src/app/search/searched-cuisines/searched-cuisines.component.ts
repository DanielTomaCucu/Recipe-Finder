import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { dummyData } from 'src/app/shared/dummydata';
import { Subscription } from 'rxjs';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searched-cuisines',
  templateUrl: './searched-cuisines.component.html',
  styleUrls: ['./searched-cuisines.component.scss'],
})
export class SearchedCuisinesComponent implements OnInit, OnDestroy {
  constructor(protected searchService: SearchService, private router: Router) {}
  private subs: Subscription = new Subscription();
  recipes: any = [];
  loading: boolean = true;
  yourThresholdValue = 100;

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.subs.add(
      this.searchService.loading$.subscribe((loadingState) => {
        this.loading = loadingState;
      })
    );

    this.subs.add(
      this.searchService.recipes$.subscribe((data) => {
        this.recipes = data;
      })
    );
  }

  get allDataLoaded() {
    return this.searchService.allDataLoaded;
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    if (!this.searchService.allDataLoaded) {
      this.fetchMoreData();
      setTimeout(() => {
        (ev as InfiniteScrollCustomEvent).target.complete();
      }, 1000);
    }
  }

  fetchMoreData() {
    this.searchService.searchRecipes(
      this.searchService.searchQuery,
      this.searchService.selectedCuisines
    );
  }
  redirectToRecipe(id: number) {
    this.router.navigateByUrl(`/recipe-details/${id}`);
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.getAllRecipes();
      event.target.complete();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.searchService.resetData();
  }
}
