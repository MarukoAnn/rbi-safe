import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StLearnMyplanComponent } from './st-learn-myplan.component';

describe('StLearnMyplanComponent', () => {
  let component: StLearnMyplanComponent;
  let fixture: ComponentFixture<StLearnMyplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StLearnMyplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StLearnMyplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
