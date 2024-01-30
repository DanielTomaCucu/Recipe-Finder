import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsPage } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: AnalyticsPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnalyticsPageRoutingModule {}
