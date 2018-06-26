import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenHighestDepositRetailersBothGameYesterdayComponent } from './top-ten-highest-deposit-retailers-both-game-yesterday.component';

describe('TopTenHighestDepositRetailersBothGameYesterdayComponent', () => {
  let component: TopTenHighestDepositRetailersBothGameYesterdayComponent;
  let fixture: ComponentFixture<TopTenHighestDepositRetailersBothGameYesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopTenHighestDepositRetailersBothGameYesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenHighestDepositRetailersBothGameYesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
