import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhInstitutionComponent } from './ph-institution.component';

describe('PhInstitutionComponent', () => {
  let component: PhInstitutionComponent;
  let fixture: ComponentFixture<PhInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
