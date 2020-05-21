import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import {ConfirmDialogModule} from 'primeng/confirmdialog';



@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    CheckboxModule,
    FormsModule,
    ToastModule,
    ConfirmDialogModule
  ]
})
export class LoginModule { }
