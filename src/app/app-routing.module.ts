import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InscriptionClientComponent } from './pillier/components/inscription-client/inscription-client.component';
import { InscriptionEntrepriseComponent } from './pillier/components/inscription-entreprise/inscription-entreprise.component';
import { LoginComponent } from './pillier/components/login/login.component';

const routes: Routes = [
  { path: 'entreprise', loadChildren: () => import('./entreprise/entreprise.module').then(m => m.EntrepriseModule) }, { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) }, { path: 'client', loadChildren: () => import('./client/client.module').then(m => m.ClientModule) },
  { path: 'inscription-client', component: InscriptionClientComponent},
  { path: 'inscription-entreprise', component: InscriptionEntrepriseComponent},
  { path: 'login', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
