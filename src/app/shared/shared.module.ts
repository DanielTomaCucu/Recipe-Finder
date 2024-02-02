import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './pipes/safeHTML.pipe';
import { CapitalizeFirstPipe } from './pipes/capitalizeFirst.pipe';
import { SkeletonCardsComponent } from './skeleton-loaders/skeleton-cards/skeleton-cards.component';
import { IonicModule } from '@ionic/angular';
import { RecipeAllInformationComponent } from './skeleton-loaders/recipe-all-information/recipe-all-information.component';
import { SkeletonSearchRecipeComponent } from './skeleton-loaders/skeleton-search-recipe/skeleton-search-recipe.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';

@NgModule({
  declarations: [
    SafeHtmlPipe,
    CapitalizeFirstPipe,
    SkeletonCardsComponent,
    RecipeAllInformationComponent,
    SkeletonSearchRecipeComponent,
    ClickOutsideDirective,
  ],
  imports: [CommonModule, IonicModule],
  exports: [
    SafeHtmlPipe,
    CapitalizeFirstPipe,
    SkeletonCardsComponent,
    RecipeAllInformationComponent,
    SkeletonSearchRecipeComponent,
    ClickOutsideDirective,
  ],
})
export class SharedModule {}
