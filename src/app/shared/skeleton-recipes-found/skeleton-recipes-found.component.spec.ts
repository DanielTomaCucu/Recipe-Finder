import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SkeletonRecipesFoundComponent } from './skeleton-recipes-found.component';

describe('SkeletonRecipesFoundComponent', () => {
  let component: SkeletonRecipesFoundComponent;
  let fixture: ComponentFixture<SkeletonRecipesFoundComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeletonRecipesFoundComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SkeletonRecipesFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
