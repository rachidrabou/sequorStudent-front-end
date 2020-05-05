import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeFilieresComponent } from './admin-liste-filieres.component';

describe('AdminListeFilieresComponent', () => {
  let component: AdminListeFilieresComponent;
  let fixture: ComponentFixture<AdminListeFilieresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeFilieresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeFilieresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
