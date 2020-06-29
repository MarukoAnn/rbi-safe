import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrControlStatusComponent } from './sr-control-status.component';

describe('SrControlStatusComponent', () => {
  let component: SrControlStatusComponent;
  let fixture: ComponentFixture<SrControlStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrControlStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrControlStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
