import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PageOption} from '../../../../common/public/Api';
import {StStartStudyService} from '../../../../common/services/st-start-study.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-st-learn-myplan',
  templateUrl: './st-learn-myplan.component.html',
  styleUrls: ['./st-learn-myplan.component.scss']
})
export class StLearnMyplanComponent implements OnInit {
  public pageNo: number = 1;
  public myPlanList: Array<object> = [];
  public pageOption: PageOption = {
    totalRecord: 10,
    pageSize: 10
  };
  @Output()
  public eventEmit: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    private stStudySrv: StStartStudyService,
    private router: Router
  ) { }
  ngOnInit() {
    this.initMyPlanData();
  }

  public  initMyPlanData(): void {
    this.stStudySrv.getMyPlanPageInfo({pageNo: this.pageNo, pageSize: 10}).subscribe(res => {
      console.log(res);
      this.myPlanList = res.data.contents;
      this.pageOption.totalRecord = res.data.totalRecord;
      this.eventEmit.emit(this.myPlanList.length);
    });
  }
  public  clickEvent(e): void {
    this.pageNo = e;
    this.initMyPlanData();
  }

  public  myPlanItemClick(e): void {
      this.router.navigate(['home/strain/learn/detail'], {queryParams: {id: e.id, title: e.trainingContent}});
  }

}
