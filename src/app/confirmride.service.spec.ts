import { TestBed } from '@angular/core/testing';

import { ConfirmrideService } from './confirmride.service';

describe('ConfirmrideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConfirmrideService = TestBed.get(ConfirmrideService);
    expect(service).toBeTruthy();
  });
});
