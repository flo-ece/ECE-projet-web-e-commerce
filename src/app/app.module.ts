import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pillier/components/login/login.component';
import { AuthentificationComponent } from './pillier/services/authentification/authentification/authentification.component';
import { UserStockageComponent } from './pillier/services/stockage/user-stockage/user-stockage.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { fr_FR } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import fr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { DemoNgZorroAntdModule } from './DemoNgZorroAntdModule';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InscriptionClientComponent } from './pillier/components/inscription-client/inscription-client.component';
import { InscriptionEntrepriseComponent } from './pillier/components/inscription-entreprise/inscription-entreprise.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzInputModule } from 'ng-zorro-antd/input';
registerLocaleData(fr);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InscriptionClientComponent,
    InscriptionEntrepriseComponent
  ],
  imports: [
    NzLayoutModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzInputModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    provideClientHydration(),
    { provide: NZ_I18N, useValue: fr_FR },
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
