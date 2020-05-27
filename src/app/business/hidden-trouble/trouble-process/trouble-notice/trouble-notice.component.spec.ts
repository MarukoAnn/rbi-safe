import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleNoticeComponent } from './trouble-notice.component';

describe('TroubleNoticeComponent', () => {
  let component: TroubleNoticeComponent;
  let fixture: ComponentFixture<TroubleNoticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleNoticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleNoticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
