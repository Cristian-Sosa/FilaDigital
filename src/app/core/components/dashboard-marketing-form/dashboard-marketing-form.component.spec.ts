import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMarketingFormComponent } from './dashboard-marketing-form.component';

describe('DashboardMarketingFormComponent', () => {
  let component: DashboardMarketingFormComponent;
  let fixture: ComponentFixture<DashboardMarketingFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMarketingFormComponent]
    });
    fixture = TestBed.createComponent(DashboardMarketingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
