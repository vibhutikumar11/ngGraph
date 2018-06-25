import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAndInactiveRetailerTodayComponent } from './active-and-inactive-retailer-today.component';

describe('ActiveAndInactiveRetailerTodayComponent', () => {
  let component: ActiveAndInactiveRetailerTodayComponent;
  let fixture: ComponentFixture<ActiveAndInactiveRetailerTodayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAndInactiveRetailerTodayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAndInactiveRetailerTodayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
