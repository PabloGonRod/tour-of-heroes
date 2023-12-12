import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './superheroMock';

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }

  getSuperHero(): Hero[] {
    return HEROES
  }
}
