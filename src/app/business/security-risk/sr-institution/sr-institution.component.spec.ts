import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrInstitutionComponent } from './sr-institution.component';

describe('SrInstitutionComponent', () => {
  let component: SrInstitutionComponent;
  let fixture: ComponentFixture<SrInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
