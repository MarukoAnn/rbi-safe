import { Component, OnInit } from '@angular/core';
import {PageOption} from '../../../../common/public/Api';
import {Subscription} from 'rxjs';
import {StOnlineExamService} from '../../../../common/services/st-online-exam.service';

@Component({
  selector: 'app-st-completed-exam',
  templateUrl: './st-completed-exam.component.html',
  styleUrls: ['./st-completed-exam.component.scss']
})
export class StCompletedExamComponent implements OnInit {

  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public pageOption: PageOption = {
    totalRecord: 10,
    pageSize: 10
  };
  public pageNo: number = 1;
  public completedExamTitle: Array<object>  = [
    { field: 'id', header: '试卷id' },
    { field: 'testPaperName', header: '试卷名称' },
    { field: 'processingStatus', header: '完成状态' },
    { field: 'testResults', header: '考试结果' },
    { field: 'startTime', header: '开始考试时间' },
    { field: 'endTime', header: '结束考试时间' },
    { field: 'duration', header: '考试时长' },
    { field: 'personnelTrainingRecordId', header: '人员培训记录id' },
    { field: 'operating', header: '操作' },
  ];
  public completedExamContent: Array<object> = [];
  constructor(
    private stOnlineExamSrv: StOnlineExamService
  ) {
  }
  public themeSub: Subscription;
  ngOnInit() {
    this.initCompleteExamData();
  }
  public  initCompleteExamData(): void {
      this.stOnlineExamSrv.getOnlineExamOPageInfo({pageSize: 10, pageNo: this.pageNo, processingStatus: 2}).subscribe(res => {
        console.log(res);
        this.pageOption = {pageSize: res.data.pageSize, totalRecord: res.data.totalRecord};
        if (res.data.contents){
          this.completedExamContent = res.data.contents.map(v => {
            v.processingStatus = '已完成';
            v.operating = '详情';
            return v;
          });
        }
      });
  }
  public  clickEvent(e): void {
    console.log(e);
  }

}
