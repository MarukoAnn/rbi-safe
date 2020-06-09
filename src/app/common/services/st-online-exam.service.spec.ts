import { TestBed } from '@angular/core/testing';

import { StOnlineExamService } from './st-online-exam.service';

describe('StOnlineExamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StOnlineExamService = TestBed.get(StOnlineExamService);
    expect(service).toBeTruthy();
  });
});
