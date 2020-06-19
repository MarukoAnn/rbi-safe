import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrArchivesComponent } from './sr-archives.component';

describe('SrArchivesComponent', () => {
  let component: SrArchivesComponent;
  let fixture: ComponentFixture<SrArchivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrArchivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrArchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
