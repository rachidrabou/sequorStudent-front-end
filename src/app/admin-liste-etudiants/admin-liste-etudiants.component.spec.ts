import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeEtudiantsComponent } from './admin-liste-etudiants.component';

describe('AdminListeEtudiantsComponent', () => {
  let component: AdminListeEtudiantsComponent;
  let fixture: ComponentFixture<AdminListeEtudiantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeEtudiantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeEtudiantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
