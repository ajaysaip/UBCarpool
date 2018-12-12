import { TestBed } from '@angular/core/testing';

import { PostrideService } from './postride.service';

describe('PostrideService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostrideService = TestBed.get(PostrideService);
    expect(service).toBeTruthy();
  });
});
