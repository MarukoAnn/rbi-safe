import { TestBed } from '@angular/core/testing';

import { StStartStudyService } from './st-start-study.service';

describe('StStartStudyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StStartStudyService = TestBed.get(StStartStudyService);
    expect(service).toBeTruthy();
  });
});
