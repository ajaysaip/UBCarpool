import { TestBed } from '@angular/core/testing';

import { TripfeedbackService } from './tripfeedback.service';

describe('TripfeedbackService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TripfeedbackService = TestBed.get(TripfeedbackService);
    expect(service).toBeTruthy();
  });
});
