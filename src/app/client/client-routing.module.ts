import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientComponent } from './client.component';
import { ClientAccueilComponent } from './client-accueil/client-accueil.component';

const routes: Routes = [{ path: '', component: ClientComponent },
{ path: 'accueil', component: ClientAccueilComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
