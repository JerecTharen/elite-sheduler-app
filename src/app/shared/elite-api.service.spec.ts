import { TestBed } from '@angular/core/testing';

import { EliteAPIService } from './elite-api.service';

describe('EliteAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EliteAPIService = TestBed.get(EliteAPIService);
    expect(service).toBeTruthy();
  });
});
