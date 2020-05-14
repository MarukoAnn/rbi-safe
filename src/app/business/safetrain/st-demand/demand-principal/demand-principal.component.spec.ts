import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandPrincipalComponent } from './demand-principal.component';

describe('DemandPrincipalComponent', () => {
  let component: DemandPrincipalComponent;
  let fixture: ComponentFixture<DemandPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
