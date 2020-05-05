import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import {AdminProfileComponent} from '../../admin-profile/admin-profile.component';
import {AdminListeEtudiantsComponent} from '../../admin-liste-etudiants/admin-liste-etudiants.component';
import {AdminListeEnseignantsComponent} from '../../admin-liste-enseignants/admin-liste-enseignants.component';
import {AdminListeFilieresComponent} from '../../admin-liste-filieres/admin-liste-filieres.component';
import {AdminListeSemestresComponent} from '../../admin-liste-semestres/admin-liste-semestres.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'icons',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
  { path: 'profile',           component: AdminProfileComponent },
  { path: 'filieres',           component: AdminListeFilieresComponent },
  { path: 'filieres/semestres',           component: AdminListeSemestresComponent },
  { path: 'filieres/semestres/etudiants',           component: AdminListeEtudiantsComponent },
  { path: 'enseignants',           component: AdminListeEnseignantsComponent }
];
