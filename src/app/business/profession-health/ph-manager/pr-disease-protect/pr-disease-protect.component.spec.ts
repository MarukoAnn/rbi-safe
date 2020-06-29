import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrDiseaseProtectComponent } from './pr-disease-protect.component';

describe('PrDiseaseProtectComponent', () => {
  let component: PrDiseaseProtectComponent;
  let fixture: ComponentFixture<PrDiseaseProtectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrDiseaseProtectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrDiseaseProtectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
