import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AptitudeCertificateComponent } from './aptitude-certificate.component';

describe('AptitudeCertificateComponent', () => {
  let component: AptitudeCertificateComponent;
  let fixture: ComponentFixture<AptitudeCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AptitudeCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AptitudeCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
