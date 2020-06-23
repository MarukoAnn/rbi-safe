import { TestBed } from '@angular/core/testing';

import { ProfessHealthService } from './profess-health.service';

describe('ProfessHealthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProfessHealthService = TestBed.get(ProfessHealthService);
    expect(service).toBeTruthy();
  });
});
