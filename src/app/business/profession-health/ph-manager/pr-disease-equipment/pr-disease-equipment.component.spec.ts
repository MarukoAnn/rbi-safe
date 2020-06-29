import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrDiseaseEquipmentComponent } from './pr-disease-equipment.component';

describe('PrDiseaseEquipmentComponent', () => {
  let component: PrDiseaseEquipmentComponent;
  let fixture: ComponentFixture<PrDiseaseEquipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrDiseaseEquipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDiseaseEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
