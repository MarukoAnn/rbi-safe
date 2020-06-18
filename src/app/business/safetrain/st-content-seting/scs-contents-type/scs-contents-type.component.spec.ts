import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsContentsTypeComponent } from './scs-contents-type.component';

describe('ScsContentsTypeComponent', () => {
  let component: ScsContentsTypeComponent;
  let fixture: ComponentFixture<ScsContentsTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsContentsTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsContentsTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
