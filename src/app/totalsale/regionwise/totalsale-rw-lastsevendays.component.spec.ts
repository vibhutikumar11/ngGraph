import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsaleRwLastsevendaysComponent } from './totalsale-rw-lastsevendays.component';

describe('TotalsaleRwLastsevendaysComponent', () => {
  let component: TotalsaleRwLastsevendaysComponent;
  let fixture: ComponentFixture<TotalsaleRwLastsevendaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsaleRwLastsevendaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsaleRwLastsevendaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
