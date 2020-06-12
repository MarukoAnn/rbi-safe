import { TestBed, async, inject } from '@angular/core/testing';

import { TaskExamGuard } from './task-exam.guard';

describe('TaskExamGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskExamGuard]
    });
  });

  it('should ...', inject([TaskExamGuard], (guard: TaskExamGuard) => {
    expect(guard).toBeTruthy();
  }));
});
