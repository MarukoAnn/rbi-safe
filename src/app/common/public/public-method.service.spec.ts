import { TestBed } from '@angular/core/testing';

import { PublicMethodService } from './public-method.service';

describe('PublicMethodService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PublicMethodService = TestBed.get(PublicMethodService);
    expect(service).toBeTruthy();
  });
});
