import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlReleaseComponent } from './pl-release.component';

describe('PlReleaseComponent', () => {
  let component: PlReleaseComponent;
  let fixture: ComponentFixture<PlReleaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlReleaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlReleaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
