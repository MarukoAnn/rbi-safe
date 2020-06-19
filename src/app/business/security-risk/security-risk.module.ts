import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRiskRoutingModule } from './security-risk-routing.module';
import { SecurityRiskComponent } from './security-risk/security-risk.component';
import { SrArchivesComponent } from './sr-archives/sr-archives.component';
import { SrManagerComponent } from './sr-manager/sr-manager.component';
import {ScrollPanelModule} from 'primeng/primeng';
import { AreaWithinComponent } from './sr-manager/area-within/area-within.component';
import { AreaOutsideComponent } from './sr-manager/area-outside/area-outside.component';


@NgModule({
  declarations: [
    SecurityRiskComponent,
    SrArchivesComponent,
    SrManagerComponent,
    AreaWithinComponent,
    AreaOutsideComponent],
  imports: [
    CommonModule,
    SecurityRiskRoutingModule,
    ScrollPanelModule
  ]
})
export class SecurityRiskModule { }
