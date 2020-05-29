import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioTemplateComponent } from './radio-template.component';

describe('RadioTemplateComponent', () => {
  let component: RadioTemplateComponent;
  let fixture: ComponentFixture<RadioTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
