import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePopComponent } from './file-pop/file-pop.component';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';



@NgModule({
  declarations: [FilePopComponent],
  exports: [
    FilePopComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    DialogModule,
  ]
})
export class BasicDialogModule { }
