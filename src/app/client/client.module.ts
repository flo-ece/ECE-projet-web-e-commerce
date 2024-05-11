import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientTabComponent } from './accueil/client-tab/client-tab.component';


@NgModule({
  declarations: [
    ClientComponent,
    ClientTabComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
