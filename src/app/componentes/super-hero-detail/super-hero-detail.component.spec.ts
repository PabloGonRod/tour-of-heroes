import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroDetailComponent } from './super-hero-detail.component';

describe('SuperHeroDetailComponent', () => {
  let component: SuperHeroDetailComponent;
  let fixture: ComponentFixture<SuperHeroDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroDetailComponent]
    });
    fixture = TestBed.createComponent(SuperHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
