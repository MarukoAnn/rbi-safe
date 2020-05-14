import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StDemandComponent} from './st-demand.component';
import {DemandReportComponent} from './demand-report/demand-report.component';
import {DemandReviewComponent} from './demand-review/demand-review.component';
import {DemandPrincipalComponent} from './demand-principal/demand-principal.component';
import {DemandRecordComponent} from './demand-record/demand-record.component';


const routes: Routes = [
  {path: '', component: StDemandComponent, children: [
      {path: 'report', component: DemandReportComponent},
      {path: 'review', component: DemandReviewComponent},
      {path: 'principal', component: DemandPrincipalComponent},
      {path: 'record', component: DemandRecordComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StDemandRoutingModule { }
