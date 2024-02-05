import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IonicModule } from '@ionic/angular';
import { IngredientsComponent } from './ingredients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { IngredientsListComponent } from './ingredients-list/ingredients-list.component';
import { RecipesFoundComponent } from './recipes-found/recipes-found.component';

@NgModule({
  declarations: [
    IngredientsComponent,
    IngredientsListComponent,
    RecipesFoundComponent,
  ],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [],
})
export class IngredientsModule {}
