import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { SuperHeroFeedComponent } from './componentes/super-hero-feed/super-hero-feed.component';
import { SuperHeroDetailComponent } from './componentes/super-hero-detail/super-hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    SuperHeroFeedComponent,
    SuperHeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
