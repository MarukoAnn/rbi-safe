import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StNoExamComponent } from './st-no-exam.component';

describe('StNoExamComponent', () => {
  let component: StNoExamComponent;
  let fixture: ComponentFixture<StNoExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StNoExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StNoExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
