import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UploadImageComponent} from './upload-image.component';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [
    UploadImageComponent
  ],
  imports: [
    CommonModule,
    DialogModule
  ],
  exports: [UploadImageComponent]
})
export class UploadImageModule { }
