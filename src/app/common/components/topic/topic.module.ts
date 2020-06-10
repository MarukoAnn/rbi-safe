import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule, RadioButtonModule} from 'primeng/primeng';
import {FormsModule} from '@angular/forms';
import { TopicComponent } from './topic/topic.component';



@NgModule({
  declarations: [
    TopicComponent
  ],
  exports: [
    TopicComponent
  ],
  imports: [
    CommonModule,
    RadioButtonModule,
    FormsModule,
    InputTextModule
  ]
})
export class TopicModule { }
