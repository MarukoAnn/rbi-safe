import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootReportComponent } from './shoot-report.component';

describe('ShootReportComponent', () => {
  let component: ShootReportComponent;
  let fixture: ComponentFixture<ShootReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
