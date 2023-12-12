import { Component } from '@angular/core';
import { Hero } from 'src/app/data/hero';
import { HeroServiceService } from 'src/app/data/hero-service.service';

@Component({
  selector: 'app-super-hero-feed',
  templateUrl: './super-hero-feed.component.html',
  styleUrls: ['./super-hero-feed.component.css']
})
export class SuperHeroFeedComponent {

  hero: Hero[] = []

  constructor(private serviciosuperHero: HeroServiceService) {

    this.hero = this.serviciosuperHero.getSuperHero()

  }



}
