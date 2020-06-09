import { TestBed } from '@angular/core/testing';

import { StMytrainFileService } from './st-mytrain-file.service';

describe('StMytrainFileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StMytrainFileService = TestBed.get(StMytrainFileService);
    expect(service).toBeTruthy();
  });
});
