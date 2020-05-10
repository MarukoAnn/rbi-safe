import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {CheckboxModule} from 'primeng/checkbox';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CheckboxModule
  ]
})
export class LoginModule { }
