import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeAllInformationRoutingModule } from './recipe-all-information-routing.module';
import { IonicModule } from '@ionic/angular';
import { RecipeAllInformationComponent } from './recipe-all-information.component';
import { SharedModule } from "../shared.module";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [RecipeAllInformationComponent],
  imports: [
    CommonModule,
    RecipeAllInformationRoutingModule,
    IonicModule,
    SharedModule,
    FormsModule,
  ],
})
export class RecipeAllInformationModule {}
