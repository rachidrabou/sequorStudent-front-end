import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListeSemestresComponent } from './admin-liste-semestres.component';

describe('AdminListeSemestresComponent', () => {
  let component: AdminListeSemestresComponent;
  let fixture: ComponentFixture<AdminListeSemestresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListeSemestresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListeSemestresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
