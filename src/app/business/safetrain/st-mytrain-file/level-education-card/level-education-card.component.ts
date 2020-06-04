import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-level-education-card',
  templateUrl: './level-education-card.component.html',
  styleUrls: ['./level-education-card.component.scss']
})
export class LevelEducationCardComponent implements OnInit {

  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public levelEducationCardTitle: Array<object>  = [
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
  public levelEducationCardContent: Array<object> = [
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
    {id: 1, name: '矿山', plan: '岗位章程', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, result: '合格', operating: '详情'},
  ];
  public themeSub: Subscription;
  ngOnInit() {
  }

}
