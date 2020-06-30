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
    InputTextModule, MessageModule, RadioButtonModule,
    ScrollPanelModule,
    TabViewModule
} from 'primeng/primeng';
import { DailyTestComponent } from './ph-archive/daily-test/daily-test.component';
import { RegularTestComponent } from './ph-archive/regular-test/regular-test.component';
import { RateNowComponent } from './ph-archive/rate-now/rate-now.component';
import {TableModule} from 'primeng/table';
import {PaginationModule} from '../../common/components/pagination/pagination.module';
import { PrHygieneComponent } from './ph-manager/pr-hygiene/pr-hygiene.component';
import { PrDiseaseComponent } from './ph-manager/pr-disease/pr-disease.component';
import { PrDiseaseProtectComponent } from './ph-manager/pr-disease-protect/pr-disease-protect.component';
import { PrDiseaseStatusComponent } from './ph-manager/pr-disease-status/pr-disease-status.component';
import { PrHazardsSummaryComponent } from './ph-manager/pr-hazards-summary/pr-hazards-summary.component';
import { PrHealthCheckComponent } from './ph-manager/pr-health-check/pr-health-check.component';
import { PrDiseaseEquipmentComponent } from './ph-manager/pr-disease-equipment/pr-disease-equipment.component';


@NgModule({
  declarations: [ProfessionHealthComponent, PhInstitutionComponent, PhManagerComponent, PhArchiveComponent, DailyTestComponent, RegularTestComponent, RateNowComponent, PrHygieneComponent, PrDiseaseComponent, PrDiseaseProtectComponent, PrDiseaseStatusComponent, PrHazardsSummaryComponent, PrHealthCheckComponent, PrDiseaseEquipmentComponent],
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
        TabViewModule,
        RadioButtonModule,
        MessageModule
    ],
  providers: [DatePipe]
})
export class ProfessionHealthModule { }
