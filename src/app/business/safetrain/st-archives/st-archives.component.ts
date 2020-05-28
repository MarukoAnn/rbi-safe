import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-st-demand',
  templateUrl: './st-archives.component.html',
  styleUrls: ['./st-archives.component.scss']
})
export class StArchivesComponent implements OnInit {
  public arcTabItem = [
    {item: {label: '四级HSE教育培训台账', ftcolor: '#4F88DE', bgc: '#4F88DE'}, simbol: 'report'},
    {item: {label: '特种作业人员登记台账', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'review'},
    {item: {label: '主要负责人、安全生产管理人员培训台账', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'principal'},
    {item: {label: '日常培训台账', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'record'},
  ];
  public arcActiveIndex: number = 1;

  constructor() {
  }

  ngOnInit() {
    this.arcTabItemClick(1);
  }

  public arcTabItemClick(index): void {
    this.arcActiveIndex = index;
    this.arcTabItem.forEach(val => {
      val.item.ftcolor = '#D4D4D4';
      val.item.bgc = '#EDEDED';
    });
    this.arcTabItem[index].item.ftcolor = '#4F88DE';
    this.arcTabItem[index].item.bgc = '#4F88DE';
  }
}
