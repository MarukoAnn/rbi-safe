import { TestBed } from '@angular/core/testing';

import { BigRiskService } from './big-risk.service';

describe('BigRiskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BigRiskService = TestBed.get(BigRiskService);
    expect(service).toBeTruthy();
  });
});
