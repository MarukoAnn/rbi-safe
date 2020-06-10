import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StFileLibraryComponent } from './st-file-library.component';

describe('StFileLibraryComponent', () => {
  let component: StFileLibraryComponent;
  let fixture: ComponentFixture<StFileLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StFileLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StFileLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
