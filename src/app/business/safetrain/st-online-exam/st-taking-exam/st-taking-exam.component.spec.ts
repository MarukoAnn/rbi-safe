import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StTakingExamComponent } from './st-taking-exam.component';

describe('StTakingExamComponent', () => {
  let component: StTakingExamComponent;
  let fixture: ComponentFixture<StTakingExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StTakingExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StTakingExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
