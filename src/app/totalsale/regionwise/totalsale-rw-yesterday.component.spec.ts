import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsaleRwYesterdayComponent } from './totalsale-rw-yesterday.component';


describe('YesterdayComponent', () => {
  let component: TotalsaleRwYesterdayComponent;
  let fixture: ComponentFixture<TotalsaleRwYesterdayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsaleRwYesterdayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsaleRwYesterdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
