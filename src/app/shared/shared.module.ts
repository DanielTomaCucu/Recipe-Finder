import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipes/safeHTML.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalizeFirst.pipe';
import { SkeletonCardsComponent } from './skeleton-cards/skeleton-cards.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [SafeHtmlPipe, CapitalizeFirstPipe, SkeletonCardsComponent],
  imports: [CommonModule,IonicModule],
  exports: [SafeHtmlPipe, CapitalizeFirstPipe, SkeletonCardsComponent],
})
export class SharedModule {}
