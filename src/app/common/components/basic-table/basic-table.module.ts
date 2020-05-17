import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ScrollPanelModule} from 'primeng/primeng';
import {BfTableBtnComponent} from './bf-table-btn/bf-table-btn.component';
import {TableModule} from 'primeng/table';
import { CheckTableBtnComponent } from './check-table-btn/check-table-btn.component';
import {ButtonModule} from 'primeng/button';



@NgModule({
  declarations: [BfTableBtnComponent, CheckTableBtnComponent],
  imports: [
    CommonModule,
    ScrollPanelModule,
    TableModule,
    ButtonModule
  ],
  exports: [
    BfTableBtnComponent,
    CheckTableBtnComponent,
  ],
})
export class BasicTableModule { }
