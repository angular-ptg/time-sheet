import { TestBed, inject } from '@angular/core/testing';

import { HolidayListService } from './holiday-list.service';

describe('HolidayListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HolidayListService]
    });
  });

  it('should be created', inject([HolidayListService], (service: HolidayListService) => {
    expect(service).toBeTruthy();
  }));
});
