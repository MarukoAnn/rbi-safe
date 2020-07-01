import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StWrongQuestionComponent } from './st-wrong-question.component';

describe('StWrongQuestionComponent', () => {
  let component: StWrongQuestionComponent;
  let fixture: ComponentFixture<StWrongQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StWrongQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StWrongQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
