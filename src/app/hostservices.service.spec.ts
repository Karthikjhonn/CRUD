import { TestBed } from '@angular/core/testing';

import { HostservicesService } from './hostservices.service';

describe('HostservicesService', () => {
  let service: HostservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HostservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
