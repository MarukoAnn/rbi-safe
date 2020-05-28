import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st-content-seting',
  templateUrl: './st-content-seting.component.html',
  styleUrls: ['./st-content-seting.component.scss']
})
export class StContentSetingComponent implements OnInit {
  public arcTabItem = [
    {item: {label: '培训内容', ftcolor: '#4F88DE', bgc: '#4F88DE'}, simbol: 'report'},
    {item: {label: '培训题库', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'review'},
  ];
  public arcActiveIndex: number = 0;
  constructor() { }

  ngOnInit() {
    this.arcTabItemClick(0);
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
