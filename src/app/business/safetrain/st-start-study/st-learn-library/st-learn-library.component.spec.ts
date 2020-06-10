import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StLearnLibraryComponent } from './st-learn-library.component';

describe('StLearnLibraryComponent', () => {
  let component: StLearnLibraryComponent;
  let fixture: ComponentFixture<StLearnLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StLearnLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StLearnLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
