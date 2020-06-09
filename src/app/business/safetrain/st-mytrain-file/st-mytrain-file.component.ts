import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st-mytrain-file',
  templateUrl: './st-mytrain-file.component.html',
  styleUrls: ['./st-mytrain-file.component.scss']
})
export class StMytrainFileComponent implements OnInit {

  public arcTabItem = [
    {item: {label: '我的日常培训记录', ftcolor: '#4F88DE', bgc: '#4F88DE'}},
    {item: {label: '我的资格证书', ftcolor: '#B3B3B3', bgc: '#EDEDED'}},
    {item: {label: '我的四级HSE教育卡', ftcolor: '#B3B3B3', bgc: '#EDEDED'}},
  ];
  public arcActiveIndex: number = 0;
  constructor() { }

  ngOnInit() {
    this.arcTabItemClick(2);
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
