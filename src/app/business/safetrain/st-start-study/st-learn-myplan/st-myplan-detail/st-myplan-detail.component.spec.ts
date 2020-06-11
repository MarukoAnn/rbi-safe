import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StMyplanDetailComponent } from './st-myplan-detail.component';

describe('StMyplanDetailComponent', () => {
  let component: StMyplanDetailComponent;
  let fixture: ComponentFixture<StMyplanDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StMyplanDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StMyplanDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
