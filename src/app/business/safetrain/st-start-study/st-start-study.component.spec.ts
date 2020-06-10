import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StStartStudyComponent } from './st-start-study.component';

describe('StStartStudyComponent', () => {
  let component: StStartStudyComponent;
  let fixture: ComponentFixture<StStartStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StStartStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StStartStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
