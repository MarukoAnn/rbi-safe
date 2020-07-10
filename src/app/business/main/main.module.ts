import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import {EchartsBarModule} from '../../common/components/echarts-bar/echarts-bar.module';
import {EchartsPieModule} from '../../common/components/echarts-pie/echarts-pie.module';
import {DialogModule} from 'primeng/dialog';
import {FormsModule} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    EchartsBarModule,
    EchartsPieModule,
    DialogModule,
    FormsModule,
    ButtonModule,
    InputTextModule
  ]
})
export class MainModule { }
