import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyRecordComponent } from './daily-record.component';

describe('DailyRecordComponent', () => {
  let component: DailyRecordComponent;
  let fixture: ComponentFixture<DailyRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
