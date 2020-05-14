import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandRecordComponent } from './demand-record.component';

describe('DemandRecordComponent', () => {
  let component: DemandRecordComponent;
  let fixture: ComponentFixture<DemandRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
