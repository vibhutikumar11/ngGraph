import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent } from './daily-total-deposit-and-daily-total-sale-region-wise-yesterday.component';

describe('DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent', () => {
  let component: DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent;
  let fixture: ComponentFixture<DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTotalDepositAndDailyTotalSaleRegionWiseYesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
