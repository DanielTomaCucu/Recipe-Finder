import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WineRoutingModule } from './wine-routing.module';
import { WineComponent } from './wine.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [WineComponent],
  imports: [CommonModule, WineRoutingModule, IonicModule, FormsModule , SharedModule],
})
export class WineModule {}
