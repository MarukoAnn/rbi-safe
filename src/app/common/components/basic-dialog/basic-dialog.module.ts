import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilePopComponent } from './file-pop/file-pop.component';
import {UploadFileRecordComponent} from './upload-file-record/upload-file-record.component';
import {BasicTableModule} from '../basic-table/basic-table.module';
import {FileUploadModule} from 'primeng/fileupload';
import {DialogModule} from 'primeng/dialog';




@NgModule({
  declarations: [FilePopComponent, UploadFileRecordComponent],
  exports: [
    FilePopComponent,
    UploadFileRecordComponent
  ],
  imports: [
    CommonModule,
    FileUploadModule,
    DialogModule,
    BasicTableModule
  ],
})
export class BasicDialogModule { }
