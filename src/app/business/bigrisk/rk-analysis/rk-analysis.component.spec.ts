import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkAnalysisComponent } from './rk-analysis.component';

describe('RkAnalysisComponent', () => {
  let component: RkAnalysisComponent;
  let fixture: ComponentFixture<RkAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
