import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StVideoLibraryComponent } from './st-video-library.component';

describe('StVideoLibraryComponent', () => {
  let component: StVideoLibraryComponent;
  let fixture: ComponentFixture<StVideoLibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StVideoLibraryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StVideoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
