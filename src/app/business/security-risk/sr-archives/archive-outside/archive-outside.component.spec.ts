import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveOutsideComponent } from './archive-outside.component';

describe('ArchiveOutsideComponent', () => {
  let component: ArchiveOutsideComponent;
  let fixture: ComponentFixture<ArchiveOutsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveOutsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveOutsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
