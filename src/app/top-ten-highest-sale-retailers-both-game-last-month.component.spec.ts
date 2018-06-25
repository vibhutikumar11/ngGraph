import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenHighestSaleRetailersBothGameLastMonthComponent } from './top-ten-highest-sale-retailers-both-game-last-month.component';

describe('TopTenHighestSaleRetailersBothGameLastMonthComponent', () => {
  let component: TopTenHighestSaleRetailersBothGameLastMonthComponent;
  let fixture: ComponentFixture<TopTenHighestSaleRetailersBothGameLastMonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenHighestSaleRetailersBothGameLastMonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenHighestSaleRetailersBothGameLastMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
