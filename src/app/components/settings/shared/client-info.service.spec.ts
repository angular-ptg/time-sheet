import { TestBed, inject } from '@angular/core/testing';

import { ClientInfoService } from './client-info.service';

describe('ClientInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientInfoService]
    });
  });

  it('should be created', inject([ClientInfoService], (service: ClientInfoService) => {
    expect(service).toBeTruthy();
  }));
});
