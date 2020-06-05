import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {PageOption} from '../../../../common/public/Api';
import {ThemeService} from '../../../../common/public/theme.service';

@Component({
  selector: 'app-level-education-card',
  templateUrl: './level-education-card.component.html',
  styleUrls: ['./level-education-card.component.scss']
})
export class LevelEducationCardComponent implements OnInit {

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
  public levelEducationCardTitle: Array<object>  = [
    { field: 'id', header: '序号' },
    { field: 'time', header: '入厂时间' },
    { field: 'name', header: '工种' },
    { field: 'level', header: '分公司级成绩' },
    { field: 'content', header: '厂级成绩' },
    { field: 'examTime', header: '车间级成绩' },
    { field: 'timeLenght', header: '班组级成绩' },
    { field: 'operating', header: '四级HSE教育卡' },
  ];
  public levelEducationCardContent: Array<object> = [
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
    {id: 1, name: '矿山', content: '岗位员工安全培训', time: '2020-5-12', examTime: '2020-5-12', timeLenght: '32学时', score: 100, level: '合格', operating: '详情'},
  ];
  public themeSub: Subscription;
  constructor(
    private themeSrv: ThemeService
  ) {
  }
  ngOnInit() {

  }
  // 分页点击事件
  public  clickEvent(e): void {
      console.log(e);
  }

}
