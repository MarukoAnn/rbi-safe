import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroubleShootComponent } from './trouble-shoot.component';

describe('TroubleShootComponent', () => {
  let component: TroubleShootComponent;
  let fixture: ComponentFixture<TroubleShootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroubleShootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroubleShootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
