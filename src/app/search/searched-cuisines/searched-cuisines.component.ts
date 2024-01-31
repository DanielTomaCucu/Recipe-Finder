import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { dummyData } from 'src/app/shared/dummydata';

@Component({
  selector: 'app-searched-cuisines',
  templateUrl: './searched-cuisines.component.html',
  styleUrls: [
    './searched-cuisines.component.scss',

  ],
})
export class SearchedCuisinesComponent implements OnInit {
  constructor(private searchService: SearchService) {}
  recipes: any='';
  ngOnInit() {
      this.searchService.recipes$.subscribe((data) => {
      console.log(data);
      this.recipes = data;
    });
    /* this.recipes = dummyData;
    console.log(this.recipes); */
  }
}
