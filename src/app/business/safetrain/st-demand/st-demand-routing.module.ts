import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {StDemandComponent} from './st-demand.component';
const routes: Routes = [
  {path: '', component: StDemandComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StDemandRoutingModule { }
