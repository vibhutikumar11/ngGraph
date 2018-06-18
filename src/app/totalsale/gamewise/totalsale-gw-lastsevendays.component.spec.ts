import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsaleGwLastsevendaysComponent } from './totalsale-gw-lastsevendays.component';

describe('TotalsaleGwLastsevendaysComponent', () => {
  let component: TotalsaleGwLastsevendaysComponent;
  let fixture: ComponentFixture<TotalsaleGwLastsevendaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsaleGwLastsevendaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsaleGwLastsevendaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
