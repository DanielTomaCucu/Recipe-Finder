import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'ingredients',
        loadChildren: () =>
          import('../ingredients/ingredients.module').then((m) => m.IngredientsModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('../search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'analytics',
        loadChildren: () =>
          import('../analytics/analytics.module').then(
            (m) => m.AnalyticsPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: 'search/cuisines',
    loadChildren: () =>
      import('../search/searched-cuisines/searched-cuisines.module').then(
        (m) => m.SearchedCuisinesModule
      ),
    data: { animation: 'SearchedCuisines' },
  },
  {
    path: 'recipe-details/:recipeId',
    loadChildren: () =>
      import(
        '../shared/recipe-all-information/recipe-all-information.module'
      ).then((m) => m.RecipeAllInformationModule),
  },

  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
