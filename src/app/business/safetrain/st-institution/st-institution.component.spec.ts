import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StInstitutionComponent } from './st-institution.component';

describe('StInstitutionComponent', () => {
  let component: StInstitutionComponent;
  let fixture: ComponentFixture<StInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
