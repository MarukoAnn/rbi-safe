import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafetrainRoutingModule } from './safetrain-routing.module';
import { StInstitutionComponent } from './st-institution/st-institution.component';
import { StPlainComponent } from './st-plain/st-plain.component';
import { StContentSetingComponent } from './st-content-seting/st-content-seting.component';
import { SafeTrainComponent } from './safe-train/safe-train.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/primeng';
import {StDemandModule} from './st-demand/st-demand.module';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import { PlainEditComponent } from './st-plain/plain-edit/plain-edit.component';
import { PlainListComponent } from './st-plain/plain-list/plain-list.component';
import {StepsModule} from 'primeng/steps';
import {TabViewModule} from 'primeng/tabview';
import { PlTrainComponent } from './st-plain/plain-list/pl-train/pl-train.component';
import { PlExamComponent } from './st-plain/plain-list/pl-exam/pl-exam.component';
import { PlReleaseComponent } from './st-plain/plain-list/pl-release/pl-release.component';
import {PlInputComponent} from './st-plain/plain-list/pl-input/pl-input.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule} from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';
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
    PlReleaseComponent
  ],
  imports: [
    CommonModule,
    SafetrainRoutingModule,
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    StDemandModule,
    PaginationModule,
    StepsModule,
    TabViewModule,
    DropdownModule,
    CalendarModule,
    FormsModule,
  ]
})
export class SafetrainModule { }
