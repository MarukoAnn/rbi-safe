import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StExamListComponent } from './st-exam-list.component';

describe('StExamListComponent', () => {
  let component: StExamListComponent;
  let fixture: ComponentFixture<StExamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StExamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StExamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
