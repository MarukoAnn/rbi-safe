import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StOnlineExamComponent } from './st-online-exam.component';

describe('StOnlineExamComponent', () => {
  let component: StOnlineExamComponent;
  let fixture: ComponentFixture<StOnlineExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StOnlineExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StOnlineExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
