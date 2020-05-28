import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScsContentsComponent } from './scs-contents.component';

describe('ScsContentsComponent', () => {
  let component: ScsContentsComponent;
  let fixture: ComponentFixture<ScsContentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScsContentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScsContentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
