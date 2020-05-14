import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st-demand',
  templateUrl: './st-demand.component.html',
  styleUrls: ['./st-demand.component.scss']
})
export class StDemandComponent implements OnInit {

  public tabitem = [
    {item: {label: '日常需求填报', ftcolor: '#4F88DE', bgc: '#4F88DE'}, link: 'report'},
    {item: {label: '特种人员取证/复审培训', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, link: 'review'},
    {item: {label: '主要负责人/安全生产管理员', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, link: 'principal'},
    {item: {label: '历史教育需求记录', ftcolor: '#B3B3B3', bgc: '#EDEDED'},  link: 'record'},
  ];
  constructor() { }

  ngOnInit() {
  }

  public  tabItemClick(item): void {
      this.tabitem.forEach(val => {
        val.item.ftcolor = '#D4D4D4';
        val.item.bgc = '#EDEDED';
      });
      item.item.ftcolor = '#4F88DE';
      item.item.bgc = '#4F88DE';
  }
}
