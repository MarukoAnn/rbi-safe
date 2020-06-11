import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StStartStudyService} from '../../../../../common/services/st-start-study.service';

@Component({
  selector: 'app-st-myplan-detail',
  templateUrl: './st-myplan-detail.component.html',
  styleUrls: ['./st-myplan-detail.component.scss']
})
export class StMyplanDetailComponent implements OnInit {

  public title: any;
  public fileContent: Array<object> = [];
  public videoContent: Array<object> = [];
  constructor(
    private route: ActivatedRoute,
    private stStudySrv: StStartStudyService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(res => {
      this.title = res.title;
      this.initMyplanDetailData(res.id);
    });
  }
  public  initMyplanDetailData(value): void {
      this.stStudySrv.getMyPlanInfoById({id: value}).subscribe(res => {
        console.log(res);
        this.fileContent = res.data.file;
        this.videoContent = res.data.video;
      });
  }
  // 返回上一级
  public  backPreviouClick(): void {
    history.go(-1);
  }

  public  openFileClick(e): void {
    window.open(e.resourcePath);
  }
}
