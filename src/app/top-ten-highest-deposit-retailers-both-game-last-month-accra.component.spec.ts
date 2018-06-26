import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenHighestDepositRetailersBothGameLastMonthAccraComponent } from './top-ten-highest-deposit-retailers-both-game-last-month-accra.component';

describe('TopTenHighestDepositRetailersBothGameLastMonthAccraComponent', () => {
  let component: TopTenHighestDepositRetailersBothGameLastMonthAccraComponent;
  let fixture: ComponentFixture<TopTenHighestDepositRetailersBothGameLastMonthAccraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenHighestDepositRetailersBothGameLastMonthAccraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenHighestDepositRetailersBothGameLastMonthAccraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
