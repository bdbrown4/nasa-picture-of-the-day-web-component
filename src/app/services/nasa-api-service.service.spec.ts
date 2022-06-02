import { TestBed } from '@angular/core/testing';

import { NasaApiServiceService } from './nasa-api-service.service';

describe('NasaApiServiceService', () => {
  let service: NasaApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NasaApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
