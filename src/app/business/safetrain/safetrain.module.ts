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
import {
  CalendarModule, CardModule,
  CheckboxModule,
  DialogModule,
  DropdownModule,
  FileUploadModule,
  InputTextareaModule,
  RadioButtonModule,
  ScrollPanelModule,
  StepsModule,
  TabViewModule,
  TreeModule
} from 'primeng/primeng';
import {StArchivesComponent} from './st-archives/st-archives.component';
import {ArchivesSpecialComponent} from './st-archives/archives-special/archives-special.component';
import {TableModule} from 'primeng/table';
import { ScsContentsComponent } from './st-content-seting/scs-contents/scs-contents.component';
import { ScsQuestionComponent } from './st-content-seting/scs-question/scs-question.component';
import {QuestionTemplateModule} from '../../common/components/question-template/question-template.module';
import { ArchivesEducateComponent } from './st-archives/archives-educate/archives-educate.component';
import { ArchivesManageComponent } from './st-archives/archives-manage/archives-manage.component';
import { ArchivesDailyComponent } from './st-archives/archives-daily/archives-daily.component';
import { ScsSortComponent } from './st-content-seting/scs-sort/scs-sort.component';
import { StMytrainFileComponent } from './st-mytrain-file/st-mytrain-file.component';
import { StOnlineExamComponent } from './st-online-exam/st-online-exam.component';
import { DailyRecordComponent } from './st-mytrain-file/daily-record/daily-record.component';
import { AptitudeCertificateComponent } from './st-mytrain-file/aptitude-certificate/aptitude-certificate.component';
import { LevelEducationCardComponent } from './st-mytrain-file/level-education-card/level-education-card.component';
import { StCompletedExamComponent } from './st-online-exam/st-completed-exam/st-completed-exam.component';
import { StNoExamComponent } from './st-online-exam/st-no-exam/st-no-exam.component';
import { PtProcessedComponent } from './st-plain/plain-list/pt-processed/pt-processed.component';
import { PtUnprocessedComponent } from './st-plain/plain-list/pt-unprocessed/pt-unprocessed.component';
import { StTakingExamComponent } from './st-online-exam/st-taking-exam/st-taking-exam.component';
import { StExamListComponent } from './st-online-exam/st-exam-list/st-exam-list.component';

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
    ArchivesEducateComponent,
    ArchivesManageComponent,
    ArchivesDailyComponent,
    PtProcessedComponent,
    PtUnprocessedComponent,
    ArchivesDailyComponent,
    ScsSortComponent,
    StMytrainFileComponent,
    StOnlineExamComponent,
    DailyRecordComponent,
    AptitudeCertificateComponent,
    LevelEducationCardComponent,
    StCompletedExamComponent,
    StNoExamComponent,
    StTakingExamComponent,
    StExamListComponent
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
        QuestionTemplateModule,
        CheckboxModule,
        CardModule,
    ],
  providers: []
})
export class SafetrainModule { }
