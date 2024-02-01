import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchPage } from './search.page';

import { SearchPageRoutingModule } from './search-routing.module';
import { RandomRecipesComponent } from './random-recipes/random-recipes.component';
import { RandomDessertsComponent } from './random-desserts/random-desserts.component';
import { RandomEuropeanComponent } from './random-european/random-european.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, SearchPageRoutingModule,SharedModule],
  declarations: [
    SearchPage,
    RandomRecipesComponent,
    RandomDessertsComponent,
    RandomEuropeanComponent,
  ],
})
export class SearchPageModule {}
