import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './components/header/header.component';
import { IntroComponent } from './components/intro/intro.component';
import { BikesComponent } from './components/bikes-list/bikes.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { PartnersComponent } from './components/partners/partners.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { SegurosComponent } from './features/seguros/seguros.component';
import { FooterComponent } from './components/footer/footer.component';
import { BicicletasComponent } from './features/bicicletas/bicicletas.component';
import { HomeComponent } from './home/home.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { QuestionsComponent } from './components/questions/questions.component';
import { SeguroBikeComponent } from './components/seguro-bike/seguro-bike.component';
import { BikeDetailsComponent } from './features/bike-details/bike-details.component';
import { StoreLocationComponent } from './components/store-location/store-location.component';
import { ContactComponent } from './features/contact/contact.component';
import { BudgetComponent } from './features/budget/budget.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IntroComponent,
    BikesComponent,
    TechnologyComponent,
    PartnersComponent,
    TestimonialComponent,
    SegurosComponent,
    FooterComponent,
    BicicletasComponent,
    HomeComponent,
    InsuranceComponent,
    AdvantagesComponent,
    QuestionsComponent,
    SeguroBikeComponent,
    BikeDetailsComponent,
    StoreLocationComponent,
    ContactComponent,
    BudgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
