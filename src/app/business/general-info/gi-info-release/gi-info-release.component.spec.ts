import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiInfoReleaseComponent } from './gi-info-release.component';

describe('GiInfoReleaseComponent', () => {
  let component: GiInfoReleaseComponent;
  let fixture: ComponentFixture<GiInfoReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiInfoReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiInfoReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
