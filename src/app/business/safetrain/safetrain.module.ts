import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SafetrainRoutingModule } from './safetrain-routing.module';
import { StInstitutionComponent } from './st-institution/st-institution.component';
import { StDemandComponent } from './st-demand/st-demand.component';
import { StPlainComponent } from './st-plain/st-plain.component';
import { StContentSetingComponent } from './st-content-seting/st-content-seting.component';
import { SafeTrainComponent } from './safe-train/safe-train.component';
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {ScrollPanelModule} from 'primeng/primeng';
import {StDemandModule} from './st-demand/st-demand.module';


@NgModule({
  declarations: [
    StInstitutionComponent,
    StPlainComponent,
    StContentSetingComponent,
    SafeTrainComponent
  ],
  imports: [
    CommonModule,
    SafetrainRoutingModule,
    InputTextModule,
    ButtonModule,
    ScrollPanelModule,
    StDemandModule
  ]
})
export class SafetrainModule { }
