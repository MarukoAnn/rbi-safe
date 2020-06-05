import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StMytrainFileComponent } from './st-mytrain-file.component';

describe('StMytrainFileComponent', () => {
  let component: StMytrainFileComponent;
  let fixture: ComponentFixture<StMytrainFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StMytrainFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StMytrainFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
