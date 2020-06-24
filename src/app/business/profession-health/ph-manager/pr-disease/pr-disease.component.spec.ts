import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrDiseaseComponent } from './pr-disease.component';

describe('PrDiseaseComponent', () => {
  let component: PrDiseaseComponent;
  let fixture: ComponentFixture<PrDiseaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrDiseaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
