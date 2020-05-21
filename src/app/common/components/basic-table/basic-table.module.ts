import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollPanelModule} from 'primeng/primeng';
import {BfTableBtnComponent} from './bf-table-btn/bf-table-btn.component';
import {TableModule} from 'primeng/table';
import { CheckTableBtnComponent } from './check-table-btn/check-table-btn.component';
import {ButtonModule} from 'primeng/button';
import {BfTableComponent} from './bf-table/bf-table.component';



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
