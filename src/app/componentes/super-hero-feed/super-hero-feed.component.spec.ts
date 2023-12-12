import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperHeroFeedComponent } from './super-hero-feed.component';

describe('SuperHeroFeedComponent', () => {
  let component: SuperHeroFeedComponent;
  let fixture: ComponentFixture<SuperHeroFeedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SuperHeroFeedComponent]
    });
    fixture = TestBed.createComponent(SuperHeroFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
