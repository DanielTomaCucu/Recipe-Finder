import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { dummyData } from 'src/app/shared/dummydata';
import { Subscription } from 'rxjs';
import { InfiniteScrollCustomEvent,  } from '@ionic/angular';


@Component({
  selector: 'app-searched-cuisines',
  templateUrl: './searched-cuisines.component.html',
  styleUrls: ['./searched-cuisines.component.scss'],
})
export class SearchedCuisinesComponent implements OnInit, OnDestroy {
  constructor(
    private searchService: SearchService,

  ) {}
  private subs: Subscription = new Subscription();
  recipes: any = [];
  loading: boolean = false;
  ngOnInit() {
     console.log(this.recipes);
    this.subs.add(
      this.searchService.loading$.subscribe(
        (loading) => (this.loading = loading)
      )
    );
    this.subs.add(
      this.searchService.recipes$.subscribe((data) => {

        this.recipes = data;
         console.log(this.recipes);
      })
    );
  }

  onIonInfinite(ev: InfiniteScrollCustomEvent) {
    this.fetchMoreData();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 1000);
  }

  fetchMoreData() {
    this.searchService.searchRecipes(
      this.searchService.searchQuery,
      this.searchService.selectedCuisines
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
    this.searchService.resetData();
  }
}
