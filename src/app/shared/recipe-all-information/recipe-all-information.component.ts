import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAllInformationService } from './recipe-all-information.service';
import { Observable } from 'rxjs';
import { dummyRecipeInfo } from '../dummyRecipeInfo';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-all-information',
  templateUrl: './recipe-all-information.component.html',
  styleUrls: ['./recipe-all-information.component.scss'],
})
export class RecipeAllInformationComponent implements OnInit {
  dummyRecipeInfo: any = dummyRecipeInfo;
  segmentValue = 'steps';
  constructor(
    private route: ActivatedRoute,
    private recipeAllInformationService: RecipeAllInformationService,
    private toastController: ToastController
  ) {}
  isExpanded: boolean = false;
  recipeInformation$: Observable<any> | undefined;
  ngOnInit() {
      const recipeId = this.route.snapshot.paramMap.get('recipeId')!;
    this.recipeInformation$ =
      this.recipeAllInformationService.searchRecipes(recipeId);

   // console.log(dummyRecipeInfo);
    // this.recipeInformation$.subscribe(data => console.log(data));
  }
  async presentToast(position: 'top',message:string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      cssClass:"toastIng"
    });

    await toast.present();
  }
}
