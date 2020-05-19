import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { SetingRoutingModule } from './seting-routing.module';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { SetingComponent } from './seting/seting.component';
import { OrganizationManagerComponent } from './organization-manager/organization-manager.component';
import { RolesManagerComponent } from './roles-manager/roles-manager.component';
import { PersonnelManagerComponent } from './personnel-manager/personnel-manager.component';
import {LimitsManagerComponent} from './limits-manager/limits-manager.component';
import { PersonnelAccountComponent } from './user-manager/personnel-account/personnel-account.component';
import { AdminAccountComponent } from './user-manager/admin-account/admin-account.component';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import {InputTextModule, } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {BasicTableModule} from '../../common/components/basic-table/basic-table.module';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {BasicDialogModule} from '../../common/components/basic-dialog/basic-dialog.module';
import {DialogModule} from 'primeng/dialog';
import {CalendarModule, FileUploadModule, InputTextareaModule, RadioButtonModule, ScrollPanelModule, TreeModule} from 'primeng/primeng';

@NgModule({
  declarations: [
    UserManagerComponent,
    SetingComponent,
    OrganizationManagerComponent,
    RolesManagerComponent,
    PersonnelManagerComponent,
    LimitsManagerComponent,
    PersonnelAccountComponent,
    AdminAccountComponent,
  ],
  imports: [
    CommonModule,
    SetingRoutingModule,
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
    FileUploadModule
  ],
  providers: [DatePipe]
})
export class SetingModule { }
