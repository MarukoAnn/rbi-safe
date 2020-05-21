import { TestBed } from '@angular/core/testing';

import { StPlainService } from './st-plain.service';

describe('StPlainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StPlainService = TestBed.get(StPlainService);
    expect(service).toBeTruthy();
  });
});
