import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillVacantTemplateComponent } from './fill-vacant-template.component';

describe('FillVacantTemplateComponent', () => {
  let component: FillVacantTemplateComponent;
  let fixture: ComponentFixture<FillVacantTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillVacantTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillVacantTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
