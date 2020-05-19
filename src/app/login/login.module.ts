import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {CheckboxModule} from 'primeng/checkbox';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [LoginComponent],
    imports: [
        CommonModule,
        CheckboxModule,
        FormsModule
    ]
})
export class LoginModule { }
