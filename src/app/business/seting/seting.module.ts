import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {BasicTableModule} from '../../common/components/basic-table/basic-table.module';

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
    BasicTableModule
  ]
})
export class SetingModule { }