import {InjectionToken, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { EchartsBarRiskComponent } from './echarts-bar-risk/echarts-bar-risk.component';
import {NgxEchartsModule} from 'ngx-echarts';
import { EchartsBarTroubleComponent } from './echarts-bar-trouble/echarts-bar-trouble.component';



@NgModule({
  declarations: [EchartsBarRiskComponent, EchartsBarTroubleComponent],
  exports: [
    EchartsBarRiskComponent,
    EchartsBarTroubleComponent
  ],
  imports: [
    CommonModule,
    NgxEchartsModule
  ]
})
export class EchartsBarModule { }
