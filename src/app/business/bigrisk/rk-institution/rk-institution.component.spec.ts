import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkInstitutionComponent } from './rk-institution.component';

describe('RkInstitutionComponent', () => {
  let component: RkInstitutionComponent;
  let fixture: ComponentFixture<RkInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
