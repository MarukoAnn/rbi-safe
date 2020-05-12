import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {InputTextModule} from 'primeng/inputtext';
import {NoticeModule} from '../common/components/notice/notice.module';


@NgModule({
  declarations: [HeaderComponent, HomeComponent, SidebarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    InputTextModule,
    NoticeModule
  ]
})
export class HomeModule { }
