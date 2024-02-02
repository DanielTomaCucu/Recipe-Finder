import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchedCuisinesRoutingModule } from './searched-cuisines-routing.module';
import { IonicModule } from '@ionic/angular';
import { SearchedCuisinesComponent } from './searched-cuisines.component';
import { SkeletonSearchRecipeComponent } from 'src/app/shared/skeleton-loaders/skeleton-search-recipe/skeleton-search-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [SearchedCuisinesComponent],
  imports: [
    CommonModule,
    SearchedCuisinesRoutingModule,IonicModule,SharedModule
  ]
})
export class SearchedCuisinesModule { }
