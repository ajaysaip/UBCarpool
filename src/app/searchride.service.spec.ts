import { TestBed } from '@angular/core/testing';

import { SearchrideService } from './searchride.service';

describe('SearchrideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchrideService = TestBed.get(SearchrideService);
    expect(service).toBeTruthy();
  });
});
