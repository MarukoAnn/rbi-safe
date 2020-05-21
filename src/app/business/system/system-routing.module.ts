import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SystemComponent} from './system/system.component';
import {SystemMangerComponent} from './system-manger/system-manger.component';


const routes: Routes = [
  {path: '', component: SystemComponent, children:[
      {path: 'symanger', component: SystemMangerComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemRoutingModule { }
