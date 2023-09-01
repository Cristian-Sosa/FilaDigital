import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMarketingActionsComponent } from './dashboard-marketing-actions.component';

describe('DashboardMarketingActionsComponent', () => {
  let component: DashboardMarketingActionsComponent;
  let fixture: ComponentFixture<DashboardMarketingActionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMarketingActionsComponent]
    });
    fixture = TestBed.createComponent(DashboardMarketingActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
