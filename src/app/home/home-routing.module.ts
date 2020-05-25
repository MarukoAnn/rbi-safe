import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';


const routes: Routes = [
{path: '', component: HomeComponent, children: [
    {
      path: 'main',
      loadChildren: () => import('../business/main/main.module').then(m => m.MainModule)
    },
    {
      path: 'strain',
      loadChildren: () => import('../business/safetrain/safetrain.module').then(m => m.SafetrainModule),
      data: {preload: true}
    },
    {
      path: 'seting',
      loadChildren: () => import('../business/seting/seting.module').then(m => m.SetingModule),
      data: {preload: true}
    },
    {
      path: 'system',
      loadChildren: () => import('../business/system/system.module').then(m => m.SystemModule),
      data: {preload: true}
    },
    {
      path: 'trouble',
      loadChildren: () => import('../business/hidden-trouble/hidden-trouble.module').then(m => m.HiddenTroubleModule),
      data: {preload: true}
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
