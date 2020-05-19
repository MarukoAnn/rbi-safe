import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlainEditComponent } from './plain-edit.component';

describe('PlainEditComponent', () => {
  let component: PlainEditComponent;
  let fixture: ComponentFixture<PlainEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlainEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlainEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
