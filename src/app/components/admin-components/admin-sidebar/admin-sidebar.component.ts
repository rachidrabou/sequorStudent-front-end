import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/admin/profile', title: 'Profile',  icon: 'ni-tv-2 text-primary', class: '' },
  { path: '/admin/filieres', title: 'Etudiants',  icon:'ni-planet text-blue', class: '' },
  { path: '/admin/enseignants', title: 'Enseignants',  icon:'ni-pin-3 text-orange', class: '' },
  { path: '/enseignant', title: 'Réinitialisation des mots de passe',  icon:'ni-pin-3 text-orange', class: '' }
];

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
    });
  }

}
