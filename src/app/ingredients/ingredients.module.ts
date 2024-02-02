import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IngredientsRoutingModule } from './ingredients-routing.module';
import { IonicModule } from '@ionic/angular';
import { IngredientsComponent } from './ingredients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [IngredientsComponent],
  imports: [
    CommonModule,
    IngredientsRoutingModule,
    IonicModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class IngredientsModule {}
