import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsPieRiskComponent } from './echarts-pie-risk.component';

describe('EchartsPieRiskComponent', () => {
  let component: EchartsPieRiskComponent;
  let fixture: ComponentFixture<EchartsPieRiskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsPieRiskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsPieRiskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
