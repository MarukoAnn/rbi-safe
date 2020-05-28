import { TestBed } from '@angular/core/testing';

import { TroubleProcessService } from './trouble-process.service';

describe('TroubleProcessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroubleProcessService = TestBed.get(TroubleProcessService);
    expect(service).toBeTruthy();
  });
});
