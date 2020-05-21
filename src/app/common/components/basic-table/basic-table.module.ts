import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BfTableBtnComponent} from './bf-table-btn/bf-table-btn.component';
import { CheckTableBtnComponent } from './check-table-btn/check-table-btn.component';
import {BfTableComponent} from './bf-table/bf-table.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {ScrollPanelModule} from 'primeng/primeng';



@NgModule({
  declarations: [BfTableBtnComponent, CheckTableBtnComponent, BfTableComponent],
  imports: [
    CommonModule,
    ScrollPanelModule,
    TableModule,
    ButtonModule,
  ],
  exports: [
    BfTableBtnComponent,
    CheckTableBtnComponent,
    BfTableComponent
  ],
})
export class BasicTableModule { }
