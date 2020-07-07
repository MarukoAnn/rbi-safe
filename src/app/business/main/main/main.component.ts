import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public lineData = [
    {name: '一', value1: 22, value2: 24},
    {name: '二', value1: 32, value2: 42},
    {name: '三', value1: 33, value2: 21},
    {name: '四', value1: 44, value2: 35},
    {name: '五', value1: 34, value2: 41}
  ];
  public lineTilte: any = '风险等级数量统计';
  public mainPieDate: any[] = [
    {name: '维修工', value: 200},
    {name: '电工', value: 50},
    {name: '井下爆破工', value: 150},
    {name: '焊接工', value: 80},
    {name: '尾矿坝作业共', value: 120}
  ];
  constructor() { }

  ngOnInit() {
  }

}
