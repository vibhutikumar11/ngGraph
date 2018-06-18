import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalsaleTrendgraphComponent } from './totalsale-trendgraph.component';

describe('TotalsaleTrendgraphComponent', () => {
  let component: TotalsaleTrendgraphComponent;
  let fixture: ComponentFixture<TotalsaleTrendgraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalsaleTrendgraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalsaleTrendgraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
