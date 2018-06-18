import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsaleRwPreviousmonthComponent } from './totalsale-rw-previousmonth.component';

describe('TotalsaleRwPreviousmonthComponent', () => {
  let component: TotalsaleRwPreviousmonthComponent;
  let fixture: ComponentFixture<TotalsaleRwPreviousmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsaleRwPreviousmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsaleRwPreviousmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
