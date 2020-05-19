import { TestBed } from '@angular/core/testing';

import { SetingService } from './seting.service';

describe('SetingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SetingService = TestBed.get(SetingService);
    expect(service).toBeTruthy();
  });
});
