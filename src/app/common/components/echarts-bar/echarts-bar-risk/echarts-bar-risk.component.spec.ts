import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsBarRiskComponent } from './echarts-bar-risk.component';

describe('EchartsBarRiskComponent', () => {
  let component: EchartsBarRiskComponent;
  let fixture: ComponentFixture<EchartsBarRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsBarRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsBarRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
