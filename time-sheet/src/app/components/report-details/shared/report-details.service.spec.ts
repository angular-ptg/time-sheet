import { TestBed, inject } from '@angular/core/testing';

import { ReportDetailsService } from './report-details.service';

describe('ReportDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReportDetailsService]
    });
  });

  it('should be created', inject([ReportDetailsService], (service: ReportDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
