import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticeComponent } from './notice.component';
import {ScrollPanelModule} from 'primeng/primeng';



@NgModule({
    declarations: [NoticeComponent],
    exports: [
        NoticeComponent
    ],
    imports: [
      CommonModule,
      ScrollPanelModule
    ]
})
export class NoticeModule { }
