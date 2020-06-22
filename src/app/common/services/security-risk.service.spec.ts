import { TestBed } from '@angular/core/testing';

import { SecurityRiskService } from './security-risk.service';

describe('SecurityRiskService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecurityRiskService = TestBed.get(SecurityRiskService);
    expect(service).toBeTruthy();
  });
});
