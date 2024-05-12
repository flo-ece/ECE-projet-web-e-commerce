import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrepriseComponent } from './entreprise.component';
import { EntrepriseAccueilComponent } from './entreprise-accueil/entreprise-accueil.component';
import { EntrepriseAnnoncesComponent } from './entreprise-annonces/entreprise-annonces.component';

const routes: Routes = [{ path: '', component: EntrepriseComponent },
{ path: 'accueil', component: EntrepriseAccueilComponent },
{ path: 'annonces', component: EntrepriseAnnoncesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntrepriseRoutingModule { }
