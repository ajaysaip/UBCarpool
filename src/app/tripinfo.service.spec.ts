import { TestBed } from '@angular/core/testing';

import { TripinfoService } from './tripinfo.service';

describe('TripinfoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripinfoService = TestBed.get(TripinfoService);
    expect(service).toBeTruthy();
  });
});
