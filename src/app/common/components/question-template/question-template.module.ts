import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ButtonModule, CheckboxModule, InputTextareaModule, InputTextModule, RadioButtonModule} from 'primeng/primeng';
import { RadioTemplateComponent } from './radio-template/radio-template.component';
import { CheckboxTemplateComponent } from './checkbox-template/checkbox-template.component';
import { JudgeTemplateComponent } from './judge-template/judge-template.component';
import { FillVacantTemplateComponent } from './fill-vacant-template/fill-vacant-template.component';



@NgModule({
  declarations: [
    RadioTemplateComponent,
    CheckboxTemplateComponent,
    JudgeTemplateComponent,
    FillVacantTemplateComponent],
  imports: [
    CommonModule,
    FormsModule,
    RadioButtonModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    InputTextareaModule
  ],
  exports: [
    RadioTemplateComponent,
    CheckboxTemplateComponent,
    JudgeTemplateComponent,
    FillVacantTemplateComponent]
})
export class QuestionTemplateModule { }
