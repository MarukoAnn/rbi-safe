import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SystemRoutingModule } from './system-routing.module';
import { SystemComponent } from './system/system.component';
import { SystemMangerComponent } from './system-manger/system-manger.component';
import {DialogModule, MessageModule, MessagesModule, PaginatorModule, ScrollPanelModule} from 'primeng/primeng';
import {BasicDialogModule} from '../../common/components/basic-dialog/basic-dialog.module';
import {BasicTableModule} from '../../common/components/basic-table/basic-table.module';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';


@NgModule({
  declarations: [SystemComponent, SystemMangerComponent],
  imports: [
    CommonModule,
    SystemRoutingModule,
    MessagesModule,
    MessageModule,
    BasicTableModule,
    PaginatorModule,
    PaginationModule,
    InputTextModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule,
    ScrollPanelModule,
    DialogModule,
    ReactiveFormsModule,
  ]
})
export class SystemModule { }
