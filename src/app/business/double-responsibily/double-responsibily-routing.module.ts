import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DoubleResponsibilyComponent} from './double-responsibily/double-responsibily.component';
import {DrInsitutionComponent} from './dr-insitution/dr-insitution.component';


const routes: Routes = [
 {path: '', component: DoubleResponsibilyComponent, children: [
     {path: 'insitution', component: DrInsitutionComponent}
   ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoubleResponsibilyRoutingModule { }
