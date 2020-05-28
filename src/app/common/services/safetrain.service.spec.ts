import { TestBed } from '@angular/core/testing';

import { SafetrainService } from './safetrain.service';

describe('SafetrainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SafetrainService = TestBed.get(SafetrainService);
    expect(service).toBeTruthy();
  });
});
