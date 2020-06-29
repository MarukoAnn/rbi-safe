import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrDiseaseStatusComponent } from './pr-disease-status.component';

describe('PrDiseaseStatusComponent', () => {
  let component: PrDiseaseStatusComponent;
  let fixture: ComponentFixture<PrDiseaseStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrDiseaseStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDiseaseStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
