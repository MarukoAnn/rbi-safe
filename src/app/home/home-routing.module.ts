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
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
