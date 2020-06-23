import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RateNowComponent } from './rate-now.component';

describe('RateNowComponent', () => {
  let component: RateNowComponent;
  let fixture: ComponentFixture<RateNowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateNowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RateNowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
