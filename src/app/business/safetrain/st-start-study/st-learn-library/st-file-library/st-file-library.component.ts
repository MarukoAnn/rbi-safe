import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StStartStudyService} from '../../../../../common/services/st-start-study.service';
import {PageOption} from '../../../../../common/public/Api';

@Component({
  selector: 'app-st-file-library',
  templateUrl: './st-file-library.component.html',
  styleUrls: ['./st-file-library.component.scss']
})
export class StFileLibraryComponent implements OnInit, OnChanges {
  @Input()
  public fileType: any;
  @Input()
  public fileTypeName: any;
  public pageNo: number = 1;
  public fileLibraryContent: Array<object> = [];
  public pageOption: PageOption = {
    totalRecord: 10,
    pageSize: 10
  };
  constructor(
    private stStudySrv: StStartStudyService
  ) { }

  ngOnInit() {
  }
  public  initLearnFileLibraryData(): void {
    this.stStudySrv.getStudyLibraryFilePageInfo({pageNo: this.pageNo, pageSize: 10, value: this.fileType}).subscribe(res => {
      this.fileLibraryContent = res.data.contents;
      this.pageOption.totalRecord = res.data.totalRecord;
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    setTimeout(() => {
      this.initLearnFileLibraryData();
    }, 100);
  }
  // 打开文件
  public  openFileClick(e): void {
      window.open(e.resourcePath);
  }

  public  clickEvent(e): void {
      this.pageNo = e;
      this.initLearnFileLibraryData();
  }
}
