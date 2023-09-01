import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDashboardTablaComponent } from './admin-dashboard-tabla.component';

describe('AdminDashboardTablaComponent', () => {
  let component: AdminDashboardTablaComponent;
  let fixture: ComponentFixture<AdminDashboardTablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDashboardTablaComponent]
    });
    fixture = TestBed.createComponent(AdminDashboardTablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
