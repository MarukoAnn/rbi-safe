import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandReportComponent } from './demand-report.component';

describe('DemandReportComponent', () => {
  let component: DemandReportComponent;
  let fixture: ComponentFixture<DemandReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
