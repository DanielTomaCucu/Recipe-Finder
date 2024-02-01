import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipes/safeHTML.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalizeFirst.pipe';

@NgModule({
  declarations: [SafeHtmlPipe, CapitalizeFirstPipe],
  imports: [CommonModule],
  exports: [SafeHtmlPipe, CapitalizeFirstPipe],
})
export class SharedModule {}
