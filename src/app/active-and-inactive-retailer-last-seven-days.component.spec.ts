import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAndInactiveRetailerLastSevenDaysComponent } from './active-and-inactive-retailer-last-seven-days.component';

describe('ActiveAndInactiveRetailerLastSevenDaysComponent', () => {
  let component: ActiveAndInactiveRetailerLastSevenDaysComponent;
  let fixture: ComponentFixture<ActiveAndInactiveRetailerLastSevenDaysComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAndInactiveRetailerLastSevenDaysComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAndInactiveRetailerLastSevenDaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
