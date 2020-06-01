import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafetrainRoutingModule } from './safetrain-routing.module';
import { StInstitutionComponent } from './st-institution/st-institution.component';
import { StPlainComponent } from './st-plain/st-plain.component';
import { StContentSetingComponent } from './st-content-seting/st-content-seting.component';
import { SafeTrainComponent } from './safe-train/safe-train.component';
import {StDemandModule} from './st-demand/st-demand.module';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import { PlainEditComponent } from './st-plain/plain-edit/plain-edit.component';
import { PlainListComponent } from './st-plain/plain-list/plain-list.component';
import { PlTrainComponent } from './st-plain/plain-edit/pl-train/pl-train.component';
import { PlExamComponent } from './st-plain/plain-edit/pl-exam/pl-exam.component';
import { PlReleaseComponent } from './st-plain/plain-edit/pl-release/pl-release.component';
import {PlInputComponent} from './st-plain/plain-edit/pl-input/pl-input.component';
import {FormsModule} from '@angular/forms';
import {BasicTableModule} from '../../common/components/basic-table/basic-table.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {CalendarModule, DialogModule, DropdownModule, FileUploadModule, InputTextareaModule, RadioButtonModule, ScrollPanelModule, StepsModule, TabViewModule, TreeModule} from 'primeng/primeng';
import {StArchivesComponent} from './st-archives/st-archives.component';
import {ArchivesSpecialComponent} from './st-archives/archives-special/archives-special.component';
import {TableModule} from 'primeng/table';
import { ScsContentsComponent } from './st-content-seting/scs-contents/scs-contents.component';
import { ScsQuestionComponent } from './st-content-seting/scs-question/scs-question.component';
import {QuestionTemplateModule} from '../../common/components/question-template/question-template.module';
import { ScsSortComponent } from './st-content-seting/scs-sort/scs-sort.component';

@NgModule({
  declarations: [
    StInstitutionComponent,
    StPlainComponent,
    StContentSetingComponent,
    SafeTrainComponent,
    PlainEditComponent,
    PlainListComponent,
    PlInputComponent,
    PlTrainComponent,
    PlExamComponent,
    PlReleaseComponent,
    StArchivesComponent,
    ArchivesSpecialComponent,
    ScsContentsComponent,
    ScsQuestionComponent,
    ScsSortComponent
  ],
  imports: [
    CommonModule,
    SafetrainRoutingModule,
    InputTextModule,
    ButtonModule,
    BasicTableModule,
    ScrollPanelModule,
    StDemandModule,
    PaginationModule,
    StepsModule,
    TabViewModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
    DialogModule,
    TreeModule,
    TableModule,
    RadioButtonModule,
    InputTextareaModule,
    FileUploadModule,
    QuestionTemplateModule
  ],
  providers: []
})
export class SafetrainModule { }
