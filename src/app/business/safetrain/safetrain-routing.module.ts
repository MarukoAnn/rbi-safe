import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StInstitutionComponent} from './st-institution/st-institution.component';
import {StDemandComponent} from './st-demand/st-demand.component';
import {StPlainComponent} from './st-plain/st-plain.component';
import {StContentSetingComponent} from './st-content-seting/st-content-seting.component';
import {SafeTrainComponent} from './safe-train/safe-train.component';


const routes: Routes = [
  {path: '', component: SafeTrainComponent, children: [
      {path: 'institu', component: StInstitutionComponent, data: {preload: true}},
      {path: 'demand', loadChildren: () => import('./st-demand/st-demand.module').then(m => m.StDemandModule)},
      {path: 'plain', component: StPlainComponent},
      {path: 'contentset', component: StContentSetingComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SafetrainRoutingModule { }
