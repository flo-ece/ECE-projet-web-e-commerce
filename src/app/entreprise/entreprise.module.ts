import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrepriseComponent } from './entreprise.component';
import { EntrepriseTabComponent } from './services/entreprise-tab/entreprise-tab.component';
import { EntrepriseAccueilComponent } from './entreprise-accueil/entreprise-accueil.component';
import { EntrepriseAnnoncesComponent } from './entreprise-annonces/entreprise-annonces.component';


@NgModule({
  declarations: [
    EntrepriseComponent,
    EntrepriseTabComponent,
    EntrepriseAccueilComponent,
    EntrepriseAnnoncesComponent
  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule
  ]
})
export class EntrepriseModule { }
