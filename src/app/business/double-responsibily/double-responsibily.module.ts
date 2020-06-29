import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoubleResponsibilyRoutingModule } from './double-responsibily-routing.module';
import { DoubleResponsibilyComponent } from './double-responsibily/double-responsibily.component';
import { DrInsitutionComponent } from './dr-insitution/dr-insitution.component';


@NgModule({
  declarations: [
    DoubleResponsibilyComponent,
    DrInsitutionComponent
  ],
  imports: [
    CommonModule,
    DoubleResponsibilyRoutingModule
  ]
})
export class DoubleResponsibilyModule { }
