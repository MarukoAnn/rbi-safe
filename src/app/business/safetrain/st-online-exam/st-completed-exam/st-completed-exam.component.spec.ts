import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StCompletedExamComponent } from './st-completed-exam.component';

describe('StCompletedExamComponent', () => {
  let component: StCompletedExamComponent;
  let fixture: ComponentFixture<StCompletedExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StCompletedExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StCompletedExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
