import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {PageOption} from '../../../../../common/public/Api';
import {StStartStudyService} from '../../../../../common/services/st-start-study.service';

@Component({
  selector: 'app-st-video-library',
  templateUrl: './st-video-library.component.html',
  styleUrls: ['./st-video-library.component.scss']
})
export class StVideoLibraryComponent implements OnInit, OnChanges {
  @Input()
  public videType: any;
  @Input()
  public videTypeName: any;
  public pageNo: number = 1;
  public videoLibraryContent: Array<object> = [];
  public pageOption: PageOption = {
    totalRecord: 10,
    pageSize: 10
  };
  constructor(
    private stStudySrv: StStartStudyService
  ) { }

  ngOnInit() {

  }
  public  initLearnVideoLibraryData(): void {
    this.stStudySrv.getStudyLibraryVideoPageInfo({pageNo: this.pageNo, pageSize: 10, value: this.videType}).subscribe(res => {
      console.log(res);
      this.videoLibraryContent = res.data.contents;
      this.pageOption.totalRecord = res.data.totalRecord;
    });
  }
  public  clickEvent(e): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.videType);
    this.initLearnVideoLibraryData();
  }
}
