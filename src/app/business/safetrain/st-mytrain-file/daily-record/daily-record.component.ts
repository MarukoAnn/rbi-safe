import { Component, OnInit } from '@angular/core';
import {AddEducateFieldClass, EducateField, PageOption, TableHeader, UpdateEducateFieldClass} from '../../../../common/public/Api';
import {SafetrainService} from '../../../../common/services/safetrain.service';
import {Observable} from 'rxjs';
import {StMytrainFileService} from '../../../../common/services/st-mytrain-file.service';

@Component({
  selector: 'app-daily-record',
  templateUrl: './daily-record.component.html',
  styleUrls: ['./daily-record.component.scss']
})
export class DailyRecordComponent implements OnInit {
  public dailyPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public dailyTableHeader: TableHeader[] = [
    {field: 'organizationTrainingDepartmentName', header: '组织培训部门名称'},
    {field: 'trainingTypeName', header: '培训类型名称'},
    {field: 'trainingContent', header: '培训内容'},
    {field: 'examinationTime', header: '培训时间'},
    {field: 'examinationTime', header: '考试时间'},
    {field: 'testResults', header: '考试成绩'},
  ]; // 表头字段
  public dailyTableData: any[]; // 表体数据
  public dailyNowPage: number = 1; // 当前页
  constructor(
    private stMytrainFileSrv: StMytrainFileService
  ) { }

  ngOnInit() {
    this.dailyDataInit(this.dailyNowPage, this.dailyPageOption.pageSize);
  }

  // 数据初始化
  private dailyDataInit(pageNo, pageSize) {
    this.stMytrainFileSrv.getPersonalTrainingFiles({pageNo, pageSize}).subscribe((res) => {
      this.dailyTableData = res.data.contents;
      this.dailyPageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 分页操作
  public dailyPageEvent(page) {
    this.dailyNowPage = page;
    this.dailyDataInit(page, this.dailyPageOption.pageSize);
  }
}
