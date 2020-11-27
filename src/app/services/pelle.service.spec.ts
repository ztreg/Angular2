import { TestBed } from '@angular/core/testing';

import { PelleService } from './pelle.service';

describe('PelleService', () => {
  let service: PelleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PelleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
