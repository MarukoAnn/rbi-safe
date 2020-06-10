import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PageOption} from '../../../../common/public/Api';
import {Subscription} from 'rxjs';
import {StOnlineExamService} from '../../../../common/services/st-online-exam.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-st-no-exam',
  templateUrl: './st-no-exam.component.html',
  styleUrls: ['./st-no-exam.component.scss']
})
export class StNoExamComponent implements OnInit {
  @Output()
  public eventNum: EventEmitter<any> = new EventEmitter<any>();
  public startExamNoticeModel: boolean = false;
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
  public noExamTitle: Array<object>  = [
    { field: 'id', header: '试卷id' },
    { field: 'testPaperName', header: '试卷名称' },
    { field: 'processingStatus', header: '完成状态' },
    { field: 'testResults', header: '考试结果' },
    { field: 'startTime', header: '开始考试时间' },
    { field: 'endTime', header: '结束考试时间' },
    { field: 'duration', header: '考试时长' },
    { field: 'personnelTrainingRecordId', header: '人员培训记录id' },
    // { field: 'result', header: '培训结果' },
    { field: 'operating', header: '操作' },
  ];
  public noExamContent: Array<object> = [];
  public themeSub: Subscription;
  public pageNo: number = 1;
  public id: number;
  public time: number;
  constructor(
    private stOnlineExamSrv: StOnlineExamService,
    private router: Router
  ) {
  }
  ngOnInit() {
    this.initNoExamData();
  }

  public  initNoExamData(): void {
    this.stOnlineExamSrv.getOnlineExamOPageInfo({pageSize: 10, pageNo: this.pageNo, processingStatus: 1}).subscribe(res => {
      console.log(res);
      this.pageOption = {pageSize: res.data.pageSize, totalRecord: res.data.totalRecord};
      if (res.data.contents){
        this.noExamContent = res.data.contents.map(v => {
          v.processingStatus = '未完成';
          v.operating = '开始考试';
          return v;
        });
        this.eventNum.emit(this.noExamContent.length);
      }
    });
  }
  public  clickEvent(e): void {
      console.log(e);
      this.pageNo = e;
      this.initNoExamData();
  }
  // 确认开始考试
  public  startExamClick(): void {
    this.router.navigate(['/home/strain/exam/tasking'], {queryParams: {id: this.id, time: this.time}});
  }

 // 点击开始考试
  public  showNoticeModelClick(e): void {
    // console.log(e.id);
    this.id = e.id;
    this.time = e.duration;
    this.startExamNoticeModel = true;
  }
}
