import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeAllInformationService } from './recipe-all-information.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-recipe-all-information',
  templateUrl: './recipe-all-information.component.html',
  styleUrls: ['./recipe-all-information.component.scss'],
})
export class RecipeAllInformationComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private recipeAllInformationService: RecipeAllInformationService
  ) {}
  isExpanded: boolean = false;
  recipeInformation$: Observable<any> | undefined;
  ngOnInit() {
    const recipeId = this.route.snapshot.paramMap.get('recipeId')!;
    this.recipeInformation$ =
      this.recipeAllInformationService.searchRecipes(recipeId);
  }
}
