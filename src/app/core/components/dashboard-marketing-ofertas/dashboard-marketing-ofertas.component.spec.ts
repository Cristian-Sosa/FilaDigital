import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardMarketingOfertasComponent } from './dashboard-marketing-ofertas.component';

describe('DashboardMarketingOfertasComponent', () => {
  let component: DashboardMarketingOfertasComponent;
  let fixture: ComponentFixture<DashboardMarketingOfertasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DashboardMarketingOfertasComponent]
    });
    fixture = TestBed.createComponent(DashboardMarketingOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
