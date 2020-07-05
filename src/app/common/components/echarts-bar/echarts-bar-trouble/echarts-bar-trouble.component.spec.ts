import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarTroubleComponent } from './echarts-bar-trouble.component';

describe('EchartsBarTroubleComponent', () => {
  let component: EchartsBarTroubleComponent;
  let fixture: ComponentFixture<EchartsBarTroubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarTroubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarTroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
