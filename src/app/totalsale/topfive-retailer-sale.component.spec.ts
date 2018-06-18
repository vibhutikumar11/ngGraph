import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopfiveRetailerSaleComponent } from './topfive-retailer-sale.component';

describe('TopfiveRetailerSaleComponent', () => {
  let component: TopfiveRetailerSaleComponent;
  let fixture: ComponentFixture<TopfiveRetailerSaleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopfiveRetailerSaleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopfiveRetailerSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
