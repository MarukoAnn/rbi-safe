import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SafeTrainComponent } from './safe-train.component';

describe('SafeTrainComponent', () => {
  let component: SafeTrainComponent;
  let fixture: ComponentFixture<SafeTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SafeTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SafeTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
