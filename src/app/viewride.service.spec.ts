import { TestBed } from '@angular/core/testing';

import { ViewrideService } from './viewride.service';

describe('ViewrideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewrideService = TestBed.get(ViewrideService);
    expect(service).toBeTruthy();
  });
});
