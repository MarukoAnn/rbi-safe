import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RkArchiveComponent} from './rk-archive/rk-archive.component';
import {RkDiscernComponent} from './rk-discern/rk-discern.component';
import {RiskComponent} from './risk/risk.component';
import {RkInstitutionComponent} from './rk-institution/rk-institution.component';
import {RkAnalysisComponent} from './rk-analysis/rk-analysis.component';


const routes: Routes = [
  {
    path: '', component: RiskComponent, children: [
      {path: 'analysis', component: RkAnalysisComponent},
      {path: 'archive', component: RkArchiveComponent},
      {path: 'discern', component: RkDiscernComponent},
      {path: 'institution', component: RkInstitutionComponent},
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BigriskRoutingModule { }
