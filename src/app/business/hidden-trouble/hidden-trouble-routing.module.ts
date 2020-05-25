import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TroubleComponent} from './trouble/trouble.component';
import {TroubleShootComponent} from './trouble-shoot/trouble-shoot.component';
import {TroubleArchivesComponent} from './trouble-archives/trouble-archives.component';
import {TroubleProcessComponent} from './trouble-process/trouble-process.component';
import {TroubleShootInstitutionComponent} from './trouble-shoot-institution/trouble-shoot-institution.component';
import {TroubleCheckStatusComponent} from './trouble-check-status/trouble-check-status.component';


const routes: Routes = [
  {
    path: '',
    component: TroubleComponent,
    children: [
      {path: 'shoot', component: TroubleShootComponent},
      {path: 'archive', component: TroubleArchivesComponent},
      {path: 'process', component: TroubleProcessComponent},
      {path: 'institution', component: TroubleShootInstitutionComponent},
      {path: 'checkstatus', component: TroubleCheckStatusComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiddenTroubleRoutingModule { }
