import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JudgeTemplateComponent } from './judge-template.component';

describe('JudgeTemplateComponent', () => {
  let component: JudgeTemplateComponent;
  let fixture: ComponentFixture<JudgeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JudgeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JudgeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
