import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntrepriseRoutingModule } from './entreprise-routing.module';
import { EntrepriseComponent } from './entreprise.component';
import { EntrepriseAccueilComponent } from './entreprise-accueil/entreprise-accueil.component';
import { EntrepriseAnnoncesComponent } from './entreprise-annonces/entreprise-annonces.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoNgZorroAntdModule } from '../DemoNgZorroAntdModule';

@NgModule({
  declarations: [
    EntrepriseComponent,
    EntrepriseAccueilComponent,
    EntrepriseAnnoncesComponent
  ],
  imports: [
    CommonModule,
    EntrepriseRoutingModule,
    NzButtonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    DemoNgZorroAntdModule
  ]
})
export class EntrepriseModule { }
