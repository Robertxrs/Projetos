import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikesComponent } from './components/bikes-list/bikes.component';
import { SegurosComponent } from './features/seguros/seguros.component';
import { ContatoComponent } from './features/contato/contato.component';
import { HomeComponent } from './home/home.component';
import { BicicletasComponent } from './features/bicicletas/bicicletas.component';
import { OrcamentoComponent } from './features/orcamento/orcamento.component';
import { BikeDetailsComponent } from './features/bike-details/bike-details.component';;

const routes: Routes = [
  { path: 'bikes', component: BicicletasComponent },
  { path: 'insurance', component: SegurosComponent },
  { path: 'contact', component: ContatoComponent },
  { path: 'bike/:id', component: BikeDetailsComponent },
  { path: 'budget', component: OrcamentoComponent},
  { path: '', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
