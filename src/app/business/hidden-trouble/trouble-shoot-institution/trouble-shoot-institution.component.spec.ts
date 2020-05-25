import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleShootInstitutionComponent } from './trouble-shoot-institution.component';

describe('TroubleShootInstitutionComponent', () => {
  let component: TroubleShootInstitutionComponent;
  let fixture: ComponentFixture<TroubleShootInstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleShootInstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleShootInstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
