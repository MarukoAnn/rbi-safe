import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-st-learn-list',
  templateUrl: './st-learn-list.component.html',
  styleUrls: ['./st-learn-list.component.scss']
})
export class StLearnListComponent implements OnInit {

  public index: number = 0;
  public noExamNum: any =  '';
  public arcActiveIndex: number = 0;
  public arcTabItem = [
    {item: {label: '我的培训计划', ftcolor: '#4F88DE', bgc: '#4F88DE'}},
    {item: {label: '培训内容库', ftcolor: '#B3B3B3', bgc: '#EDEDED'}},
  ];
  constructor() {
  }
  ngOnInit() {
  }

  public clickEvent(e): void {
    console.log(e);
  }
  public  getLength(e): void {
    setTimeout(() => {
      this.noExamNum = e;
    }, 10);
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
