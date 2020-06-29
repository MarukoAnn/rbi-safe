import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrHazardsSummaryComponent } from './pr-hazards-summary.component';

describe('PrHazardsSummaryComponent', () => {
  let component: PrHazardsSummaryComponent;
  let fixture: ComponentFixture<PrHazardsSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrHazardsSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrHazardsSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
