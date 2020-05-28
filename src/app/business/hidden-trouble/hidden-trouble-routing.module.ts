import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TroubleComponent} from './trouble/trouble.component';
import {TroubleShootComponent} from './trouble-shoot/trouble-shoot.component';
import {TroubleArchivesComponent} from './trouble-archives/trouble-archives.component';
import {TroubleProcessComponent} from './trouble-process/trouble-process.component';
import {TroubleShootInstitutionComponent} from './trouble-shoot-institution/trouble-shoot-institution.component';
import {TroubleCheckStatusComponent} from './trouble-check-status/trouble-check-status.component';
import {TroubleListComponent} from './trouble-process/trouble-list/trouble-list.component';
import {TroubleDetailComponent} from './trouble-process/trouble-detail/trouble-detail.component';
import {TroubleNoticeComponent} from './trouble-process/trouble-notice/trouble-notice.component';
import {ArchivesListComponent} from './trouble-archives/archives-list/archives-list.component';
import {ArchivesDetailComponent} from './trouble-archives/archives-detail/archives-detail.component';


const routes: Routes = [
  {
    path: '',
    component: TroubleComponent,
    children: [
      {path: 'shoot', component: TroubleShootComponent},
      {path: 'archive', component: TroubleArchivesComponent, children: [
          {path: '',  redirectTo: 'alist', pathMatch: 'full'},
          {path: 'alist',   component: ArchivesListComponent},
          {path: 'adetail',   component: ArchivesDetailComponent},
        ]},
      {path: 'process', component: TroubleProcessComponent, children: [
          {path: '',  redirectTo: 'list', pathMatch: 'full'},
          {path: 'list',  component: TroubleListComponent},
          {path: 'detail',  component: TroubleDetailComponent},
          {path: 'notice',  component: TroubleNoticeComponent},
        ]},
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
