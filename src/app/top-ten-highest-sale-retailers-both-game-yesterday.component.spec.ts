import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenHighestSaleRetailersBothGameYesterdayComponent } from './top-ten-highest-sale-retailers-both-game-yesterday.component';

describe('TopTenHighestSaleRetailersBothGameYesterdayComponent', () => {
  let component: TopTenHighestSaleRetailersBothGameYesterdayComponent;
  let fixture: ComponentFixture<TopTenHighestSaleRetailersBothGameYesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenHighestSaleRetailersBothGameYesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenHighestSaleRetailersBothGameYesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
