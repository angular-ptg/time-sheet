import { TestBed, inject } from '@angular/core/testing';

import { EmployeeHolidayInfoService } from './employee-holiday-info.service';

describe('EmployeeHolidayInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeHolidayInfoService]
    });
  });

  it('should be created', inject([EmployeeHolidayInfoService], (service: EmployeeHolidayInfoService) => {
    expect(service).toBeTruthy();
  }));
});
