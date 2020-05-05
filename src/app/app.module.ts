import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AdminSidebarComponent } from './components/admin-components/admin-sidebar/admin-sidebar.component';
import { AdminNavbarComponent } from './components/admin-components/admin-navbar/admin-navbar.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminListeEtudiantsComponent } from './admin-liste-etudiants/admin-liste-etudiants.component';
import { AdminListeEnseignantsComponent } from './admin-liste-enseignants/admin-liste-enseignants.component';
import { AdminListeSemestresComponent } from './admin-liste-semestres/admin-liste-semestres.component';
import { AdminListeFilieresComponent } from './admin-liste-filieres/admin-liste-filieres.component';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    AdminListeFilieresComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
