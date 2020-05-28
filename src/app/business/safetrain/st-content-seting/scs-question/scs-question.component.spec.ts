import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsQuestionComponent } from './scs-question.component';

describe('ScsQuestionComponent', () => {
  let component: ScsQuestionComponent;
  let fixture: ComponentFixture<ScsQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
