import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StDemandRoutingModule } from './st-demand-routing.module';
import { DemandReportComponent } from './demand-report/demand-report.component';
import {StDemandComponent} from './st-demand.component';
import { DemandReviewComponent } from './demand-review/demand-review.component';
import { DemandPrincipalComponent } from './demand-principal/demand-principal.component';
import { DemandRecordComponent } from './demand-record/demand-record.component';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {BfTableBtnComponent} from '../../../common/components/basic-table/bf-table-btn/bf-table-btn.component';
import {TableModule} from 'primeng/table';
import {CheckTableBtnComponent} from '../../../common/components/basic-table/check-table-btn/check-table-btn.component';
import {PaginationModule} from '../../../common/components/pagination/pagination.module';


@NgModule({
  declarations: [
    DemandReportComponent,
    StDemandComponent,
    DemandReviewComponent,
    DemandPrincipalComponent,
    DemandRecordComponent,
    BfTableBtnComponent,
    CheckTableBtnComponent
  ],
  exports: [
    BfTableBtnComponent
  ],
  imports: [
    CommonModule,
    StDemandRoutingModule,
    DropdownModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    TableModule,
    PaginationModule
  ]
})
export class StDemandModule { }
