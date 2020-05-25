import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShootRectifyComponent } from './shoot-rectify.component';

describe('ShootRectifyComponent', () => {
  let component: ShootRectifyComponent;
  let fixture: ComponentFixture<ShootRectifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShootRectifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShootRectifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
