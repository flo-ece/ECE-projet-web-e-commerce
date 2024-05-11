import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionClientComponent } from './pillier/components/inscription-client/inscription-client.component';

const routes: Routes = [
  { path: 'entreprise', loadChildren: () => import('./entreprise/entreprise.module').then(m => m.EntrepriseModule) }, { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'register_client', component: InscriptionClientComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
