import { Component, OnInit } from '@angular/core';
import {ThemeService} from '../../../../common/public/theme.service';
import {Subscription} from 'rxjs';
import {PageOption} from '../../../../common/public/Api';

@Component({
  selector: 'app-daily-record',
  templateUrl: './daily-record.component.html',
  styleUrls: ['./daily-record.component.scss']
})
export class DailyRecordComponent implements OnInit {
  public pageOption: PageOption = {
    totalRecord: 10,
    pageSize: 10
  };
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public dailyRectordTitle: Array<object>  = [
    { field: 'id', header: '序号' },
    { field: 'name', header: '组织培训单位' },
    { field: 'plan', header: '教育培训计划' },
    { field: 'content', header: '日常培训内容' },
    { field: 'time', header: '培训时间' },
    { field: 'examTime', header: '考试时间' },
    { field: 'timeLenght', header: '累计学习时长' },
    { field: 'score', header: '考试成绩' },
    { field: 'result', header: '培训结果' },
    { field: 'operating', header: '操作' },
  ];
  public dailyRectordContent: Array<object> = [
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
  ];
  public themeSub: Subscription;
  constructor(
    private themeSrv: ThemeService,
  ) { }

  ngOnInit() {
  }
  // 分页点击事件
  public  clickEvent(e): void {
      console.log(e);
  }
}
