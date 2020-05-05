import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  update = false;

  updateProfile() {
    this.update = true;
  }

  valider() {
    this.update = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
