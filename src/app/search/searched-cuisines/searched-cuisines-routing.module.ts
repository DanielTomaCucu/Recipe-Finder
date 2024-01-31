import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchedCuisinesComponent } from './searched-cuisines.component';

const routes: Routes = [{ path: '', component: SearchedCuisinesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchedCuisinesRoutingModule {}
