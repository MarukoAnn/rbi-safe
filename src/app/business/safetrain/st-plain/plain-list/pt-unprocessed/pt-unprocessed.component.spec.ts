import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PtUnprocessedComponent } from './pt-unprocessed.component';

describe('PtUnprocessedComponent', () => {
  let component: PtUnprocessedComponent;
  let fixture: ComponentFixture<PtUnprocessedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtUnprocessedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PtUnprocessedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
