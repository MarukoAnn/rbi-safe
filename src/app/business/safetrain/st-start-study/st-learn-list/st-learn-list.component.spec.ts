import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StLearnListComponent } from './st-learn-list.component';

describe('StLearnListComponent', () => {
  let component: StLearnListComponent;
  let fixture: ComponentFixture<StLearnListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StLearnListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StLearnListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
