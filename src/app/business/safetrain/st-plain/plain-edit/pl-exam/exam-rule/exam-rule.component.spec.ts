import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamRuleComponent } from './exam-rule.component';

describe('ExamRuleComponent', () => {
  let component: ExamRuleComponent;
  let fixture: ComponentFixture<ExamRuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamRuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
