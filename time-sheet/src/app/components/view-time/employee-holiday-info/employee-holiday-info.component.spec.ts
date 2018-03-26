import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeHolidayInfoComponent } from './employee-holiday-info.component';

describe('EmployeeHolidayInfoComponent', () => {
  let component: EmployeeHolidayInfoComponent;
  let fixture: ComponentFixture<EmployeeHolidayInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeHolidayInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeHolidayInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
