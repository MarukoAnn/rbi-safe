import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GeneralInfoComponent} from './general-info/general-info.component';
import {GiBulletinBoardComponent} from './gi-bulletin-board/gi-bulletin-board.component';
import {GiInfoReleaseComponent} from './gi-info-release/gi-info-release.component';


const routes: Routes = [
  {path: '', component: GeneralInfoComponent, children: [
      {path: 'board', component: GiBulletinBoardComponent},
      {path: 'release', component: GiInfoReleaseComponent},
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralInfoRoutingModule { }
