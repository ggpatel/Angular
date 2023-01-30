import { TestBed } from '@angular/core/testing';

import { ReserchServiceService } from './reserch-service.service';

describe('ReserchServiceService', () => {
  let service: ReserchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
