import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleCheckStatusComponent } from './trouble-check-status.component';

describe('TroubleCheckStatusComponent', () => {
  let component: TroubleCheckStatusComponent;
  let fixture: ComponentFixture<TroubleCheckStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleCheckStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleCheckStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
