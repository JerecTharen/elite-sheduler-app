import { TestBed } from '@angular/core/testing';

import { SelctedService } from './selcted.service';

describe('SelctedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelctedService = TestBed.get(SelctedService);
    expect(service).toBeTruthy();
  });
});
