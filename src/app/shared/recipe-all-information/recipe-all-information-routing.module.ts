import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeAllInformationComponent } from './recipe-all-information.component';

const routes: Routes = [{ path:'', component: RecipeAllInformationComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecipeAllInformationRoutingModule { }
