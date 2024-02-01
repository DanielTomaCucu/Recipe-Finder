import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipes/safeHTML.pipe';

@NgModule({
  declarations: [SafeHtmlPipe],
  imports: [CommonModule],
  exports: [SafeHtmlPipe],
})
export class SharedModule {}
