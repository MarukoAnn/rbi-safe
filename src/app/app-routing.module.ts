import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ErrorComponent} from './error/error.component';
import {PreloadSelectedModules} from './preload/preload.module';


const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', loadChildren: './home/home.module#HomeModule', data: {preload: true}},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadSelectedModules})],
  exports: [RouterModule],
  providers: [PreloadSelectedModules]
})
export class AppRoutingModule { }
