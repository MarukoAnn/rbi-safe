import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlTrainComponent } from './pl-train.component';

describe('PlTrainComponent', () => {
  let component: PlTrainComponent;
  let fixture: ComponentFixture<PlTrainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlTrainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlTrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
