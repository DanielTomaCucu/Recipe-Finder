import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PlanningPage } from './planner.page';

import { PlanningRoutingModule } from './planner-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, PlanningRoutingModule],
  declarations: [PlanningPage],
})
export class PlanningPageModule {}
