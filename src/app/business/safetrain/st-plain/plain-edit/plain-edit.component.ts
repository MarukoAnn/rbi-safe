import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-plain-edit',
  templateUrl: './plain-edit.component.html',
  styleUrls: ['./plain-edit.component.scss']
})
export class PlainEditComponent implements OnInit {
  public items: MenuItem[];
  public activeIndex = 0;
  constructor() {
  }

  ngOnInit() {
    this.items = [
      {
      label: '培训计划基础设置',
      command: (event: any) => {
        this.activeIndex = 0;
      }
    },
      {
        label: '培训内容设置',
        command: (event: any) => {
          this.activeIndex = 1;
        }
      },
      {
        label: '考试项目设置',
        command: (event: any) => {
          this.activeIndex = 2;
        }
      },
      {
        label: '发布计划',
        command: (event: any) => {
          this.activeIndex = 3;
        }
      }
    ];
  }
  onTabChange(event) {
    console.log(event);
  }
}
