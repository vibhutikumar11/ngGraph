import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTotalDepositAndDailyTotalSaleDayWiseComponent } from './daily-total-deposit-and-daily-total-sale-day-wise.component';

describe('DailyTotalDepositAndDailyTotalSaleDayWiseComponent', () => {
  let component: DailyTotalDepositAndDailyTotalSaleDayWiseComponent;
  let fixture: ComponentFixture<DailyTotalDepositAndDailyTotalSaleDayWiseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTotalDepositAndDailyTotalSaleDayWiseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTotalDepositAndDailyTotalSaleDayWiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
