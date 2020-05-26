import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlExamComponent } from './pl-exam.component';

describe('PlExamComponent', () => {
  let component: PlExamComponent;
  let fixture: ComponentFixture<PlExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
