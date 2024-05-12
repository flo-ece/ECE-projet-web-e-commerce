import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientAccueilComponent } from './client-accueil/client-accueil.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientAccueilComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
