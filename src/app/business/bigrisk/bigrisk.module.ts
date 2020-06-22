import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { BigriskRoutingModule } from './bigrisk-routing.module';
import { RiskComponent } from './risk/risk.component';
import { RkArchiveComponent } from './rk-archive/rk-archive.component';
import { RkDiscernComponent } from './rk-discern/rk-discern.component';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {BasicTableModule} from '../../common/components/basic-table/basic-table.module';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BasicDialogModule} from '../../common/components/basic-dialog/basic-dialog.module';
import {DialogModule} from 'primeng/dialog';
import {
  CalendarModule,
  FileUploadModule,
  InputTextareaModule, MessageModule,
  MessagesModule,
  RadioButtonModule,
  ScrollPanelModule,
  TreeModule
} from 'primeng/primeng';
import {TableModule} from 'primeng/table';
import {UploadImageModule} from '../../common/components/upload-image/upload-image.module';
import { RkInstitutionComponent } from './rk-institution/rk-institution.component';


@NgModule({
  declarations: [
    RiskComponent,
    RkArchiveComponent,
    RkDiscernComponent,
    RkInstitutionComponent
  ],
  imports: [
    CommonModule,
    BigriskRoutingModule,
    PaginationModule,
    InputTextModule,
    ButtonModule,
    BasicTableModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    BasicDialogModule,
    DialogModule,
    ReactiveFormsModule,
    RadioButtonModule,
    CalendarModule,
    InputTextareaModule,
    TreeModule,
    ScrollPanelModule,
    FileUploadModule,
    MessagesModule,
    MessageModule,
    TableModule,
    UploadImageModule,
  ],
  providers: [DatePipe]
})
export class BigriskModule { }
