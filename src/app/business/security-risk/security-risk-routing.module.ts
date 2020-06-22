import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SecurityRiskComponent} from './security-risk/security-risk.component';
import {SrArchivesComponent} from './sr-archives/sr-archives.component';
import {SrManagerComponent} from './sr-manager/sr-manager.component';
import {AreaWithinComponent} from './sr-manager/area-within/area-within.component';
import {AreaOutsideComponent} from './sr-manager/area-outside/area-outside.component';
import {SrInstitutionComponent} from './sr-institution/sr-institution.component';


const routes: Routes = [
  {path: '', component: SecurityRiskComponent, children: [
    {path: 'archive', component: SrArchivesComponent},
    {path: 'manager', component: SrManagerComponent},
    {path: 'institution', component: SrInstitutionComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SecurityRiskRoutingModule { }
