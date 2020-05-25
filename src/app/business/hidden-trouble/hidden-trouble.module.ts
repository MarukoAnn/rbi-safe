import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { HiddenTroubleRoutingModule } from './hidden-trouble-routing.module';
import {TroubleComponent} from './trouble/trouble.component';
import { TroubleShootComponent } from './trouble-shoot/trouble-shoot.component';
import { TroubleCheckStatusComponent } from './trouble-check-status/trouble-check-status.component';
import { TroubleShootInstitutionComponent } from './trouble-shoot-institution/trouble-shoot-institution.component';
import { TroubleProcessComponent } from './trouble-process/trouble-process.component';
import { TroubleArchivesComponent } from './trouble-archives/trouble-archives.component';
import { ShootReportComponent } from './trouble-shoot/shoot-report/shoot-report.component';
import { ShootRectifyComponent } from './trouble-shoot/shoot-rectify/shoot-rectify.component';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {
  CalendarModule,
  CheckboxModule, DialogModule,
  InputTextareaModule,
  MultiSelectModule,
  RadioButtonModule,
  ScrollPanelModule, TreeModule
} from 'primeng/primeng';
import {UploadImageModule} from '../../common/components/upload-image/upload-image.module';


@NgModule({
  declarations: [
    TroubleComponent,
    TroubleShootComponent,
    TroubleCheckStatusComponent,
    TroubleShootInstitutionComponent,
    TroubleProcessComponent,
    TroubleArchivesComponent,
    ShootReportComponent,
    ShootRectifyComponent
  ],
  imports: [
    CommonModule,
    HiddenTroubleRoutingModule,
    DropdownModule,
    // FormsModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    ConfirmDialogModule,
    ScrollPanelModule,
    CalendarModule,
    RadioButtonModule,
    InputTextareaModule,
    UploadImageModule,
    FormsModule,
    ReactiveFormsModule,
    CheckboxModule,
    DialogModule,
    TreeModule
  ],
  providers: [DatePipe]
})
export class HiddenTroubleModule { }
