import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsPieTroubleComponent } from './echarts-pie-trouble.component';

describe('EchartsPieTroubleComponent', () => {
  let component: EchartsPieTroubleComponent;
  let fixture: ComponentFixture<EchartsPieTroubleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EchartsPieTroubleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EchartsPieTroubleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
