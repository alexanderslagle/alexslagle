import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { BioComponent } from './bio/bio.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { LostDucklingComponent } from './lost-duckling/lost-duckling.component';
import { FallenUmbrellaComponent } from './fallen-umbrella/fallen-umbrella.component';
import { HouseCatComponent } from './house-cat/house-cat.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, NavComponent, HomeComponent, PortfolioComponent, BioComponent, ContactComponent, ProjectCardComponent, LostDucklingComponent, FallenUmbrellaComponent, HouseCatComponent],
  imports: [BrowserModule, BrowserAnimationsModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
