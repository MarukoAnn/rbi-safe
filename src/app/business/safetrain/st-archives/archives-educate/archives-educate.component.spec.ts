import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesEducateComponent } from './archives-educate.component';

describe('ArchivesEducateComponent', () => {
  let component: ArchivesEducateComponent;
  let fixture: ComponentFixture<ArchivesEducateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesEducateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesEducateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
