import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAllInformationService } from './recipe-all-information.service';
import { Observable, Subscription } from 'rxjs';
import { dummyRecipeInfo } from '../dummyRecipeInfo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-all-information',
  templateUrl: './recipe-all-information.component.html',
  styleUrls: ['./recipe-all-information.component.scss'],
})
export class RecipeAllInformationComponent implements OnInit, OnDestroy {
  dummyRecipeInfo: any = dummyRecipeInfo;
  segmentValue = 'steps';

  constructor(
    private route: ActivatedRoute,
    private recipeAllInformationService: RecipeAllInformationService,
    private toastController: ToastController
  ) {}
  subscribtion: Subscription = new Subscription();
  isExpanded: boolean = false;
  recipeInformation$: Observable<any> | undefined;
  loading: boolean = true;

  ngOnInit() {
    this.getAllInfoRecipe();
  }

  getAllInfoRecipe() {
    const recipeId = this.route.snapshot.paramMap.get('recipeId')!;
    this.recipeAllInformationService.searchRecipes(recipeId);
    this.recipeInformation$ = this.recipeAllInformationService.recipes$;

    this.subscribtion.add(
      this.recipeAllInformationService.loading$.subscribe((loading) => {
        this.loading = loading;
      })
    );
  }

  async presentToast(position: 'top', message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      cssClass: 'toastIng',
    });

    await toast.present();
  }

  handleRefresh(event: { target: { complete: () => void } }) {
    setTimeout(() => {
      this.getAllInfoRecipe();
      event.target.complete();
    }, 2000);
  }

  ngOnDestroy(): void {
    this.subscribtion.unsubscribe();
  }
}
