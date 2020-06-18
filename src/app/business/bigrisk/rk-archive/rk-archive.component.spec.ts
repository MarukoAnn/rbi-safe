import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RkArchiveComponent } from './rk-archive.component';

describe('RkArchiveComponent', () => {
  let component: RkArchiveComponent;
  let fixture: ComponentFixture<RkArchiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RkArchiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RkArchiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
