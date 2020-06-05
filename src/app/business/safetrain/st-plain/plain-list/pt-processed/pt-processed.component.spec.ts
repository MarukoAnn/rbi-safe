import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtProcessedComponent } from './pt-processed.component';

describe('PtProcessedComponent', () => {
  let component: PtProcessedComponent;
  let fixture: ComponentFixture<PtProcessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtProcessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtProcessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
