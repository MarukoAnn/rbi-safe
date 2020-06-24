import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhArchiveComponent } from './ph-archive.component';

describe('PhArchiveComponent', () => {
  let component: PhArchiveComponent;
  let fixture: ComponentFixture<PhArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
