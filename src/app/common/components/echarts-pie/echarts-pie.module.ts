import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsPieRiskComponent } from './echarts-pie-risk/echarts-pie-risk.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { EchartsPieTroubleComponent } from './echarts-pie-trouble/echarts-pie-trouble.component';



@NgModule({
  declarations: [EchartsPieRiskComponent, EchartsPieTroubleComponent],
  exports: [
    EchartsPieRiskComponent,
    EchartsPieTroubleComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class EchartsPieModule { }
