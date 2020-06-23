import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { ProfessionHealthRoutingModule } from './profession-health-routing.module';
import { ProfessionHealthComponent } from './profession-health/profession-health.component';
import { PhInstitutionComponent } from './ph-institution/ph-institution.component';
import { PhManagerComponent } from './ph-manager/ph-manager.component';
import { PhArchiveComponent } from './ph-archive/ph-archive.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  ButtonModule,
  CalendarModule,
  DialogModule,
  InputTextareaModule,
  InputTextModule,
  ScrollPanelModule,
  TabViewModule
} from 'primeng/primeng';
import { DailyTestComponent } from './ph-archive/daily-test/daily-test.component';
import { RegularTestComponent } from './ph-archive/regular-test/regular-test.component';
import { RateNowComponent } from './ph-archive/rate-now/rate-now.component';
import {TableModule} from 'primeng/table';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import { PrHygieneComponent } from './ph-manager/pr-hygiene/pr-hygiene.component';


@NgModule({
  declarations: [ProfessionHealthComponent, PhInstitutionComponent, PhManagerComponent, PhArchiveComponent, DailyTestComponent, RegularTestComponent, RateNowComponent, PrHygieneComponent],
  imports: [
    CommonModule,
    ProfessionHealthRoutingModule,
    FormsModule,
    ScrollPanelModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    PaginationModule,
    DialogModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextareaModule,
    TabViewModule
  ],
  providers: [DatePipe]
})
export class ProfessionHealthModule { }
