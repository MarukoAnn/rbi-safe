import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trouble-check-status',
  templateUrl: './trouble-check-status.component.html',
  styleUrls: ['./trouble-check-status.component.scss']
})
export class TroubleCheckStatusComponent implements OnInit {
  public lineData = [
    {name: '一', value1: 22, value2: 24},
    {name: '二', value1: 32, value2: 42},
    {name: '三', value1: 33, value2: 21},
    {name: '四', value1: 44, value2: 35},
    {name: '五', value1: 34, value2: 41}
  ];
  public lineTilte: any = '隐患等级数量统计';
  constructor() { }

  ngOnInit() {
  }

}
