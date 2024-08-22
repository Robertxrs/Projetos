import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './components/bikes-list/bikes.component';
import { SegurosComponent } from './features/seguros/seguros.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomeComponent } from './home/home.component';
import { BicicletasComponent } from './features/bicicletas/bicicletas.component';
import { BudgetComponent } from './features/budget/budget.component';
import { BikeDetailsComponent } from './features/bike-details/bike-details.component';;

const routes: Routes = [
  { path: 'bikes', component: BicicletasComponent },
  { path: 'insurance', component: SegurosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'bike/:id', component: BikeDetailsComponent },
  { path: 'budget', component: BudgetComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
