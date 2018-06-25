import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent } from './daily-total-deposit-and-daily-total-sale-region-wise-last-month.component';

describe('DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent', () => {
  let component: DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent;
  let fixture: ComponentFixture<DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTotalDepositAndDailyTotalSaleRegionWiseLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
