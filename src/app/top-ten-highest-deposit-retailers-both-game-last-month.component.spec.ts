import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenHighestDepositRetailersBothGameLastMonthComponent } from './top-ten-highest-deposit-retailers-both-game-last-month.component';

describe('TopTenHighestDepositRetailersBothGameLastMonthComponent', () => {
  let component: TopTenHighestDepositRetailersBothGameLastMonthComponent;
  let fixture: ComponentFixture<TopTenHighestDepositRetailersBothGameLastMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenHighestDepositRetailersBothGameLastMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenHighestDepositRetailersBothGameLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
