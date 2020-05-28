import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivesSpecialComponent } from './archives-special.component';

describe('ArchivesSpecialComponent', () => {
  let component: ArchivesSpecialComponent;
  let fixture: ComponentFixture<ArchivesSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivesSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivesSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
