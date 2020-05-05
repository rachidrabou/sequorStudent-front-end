import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeEnseignantsComponent } from './admin-liste-enseignants.component';

describe('AdminListeEnseignantsComponent', () => {
  let component: AdminListeEnseignantsComponent;
  let fixture: ComponentFixture<AdminListeEnseignantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeEnseignantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeEnseignantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
