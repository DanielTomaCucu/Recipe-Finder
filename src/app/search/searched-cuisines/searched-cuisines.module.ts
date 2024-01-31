import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchedCuisinesRoutingModule } from './searched-cuisines-routing.module';
import { IonicModule } from '@ionic/angular';
import { SearchedCuisinesComponent } from './searched-cuisines.component';


@NgModule({
  declarations: [SearchedCuisinesComponent],
  imports: [
    CommonModule,
    SearchedCuisinesRoutingModule,IonicModule
  ]
})
export class SearchedCuisinesModule { }
