import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LimitsManagerComponent } from './limits-manager.component';

describe('LimitsManagerComponent', () => {
  let component: LimitsManagerComponent;
  let fixture: ComponentFixture<LimitsManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LimitsManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LimitsManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
