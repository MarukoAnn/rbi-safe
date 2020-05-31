import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RadioTemplate} from '../../../public/Api';

@Component({
  selector: 'app-fill-vacant-template',
  templateUrl: './fill-vacant-template.component.html',
  styleUrls: ['./fill-vacant-template.component.scss']
})
export class FillVacantTemplateComponent implements OnInit {

  public selTitle: string = '请输入填空题目';
  @Output()
  public questionEvent: EventEmitter<any> = new EventEmitter<any>();
  public radioTemplate: RadioTemplate = {
    subject: '',
    option: '',
    rightKey: '',
    order: ''
  };
  public rightKey: Array<string> = [];

  // 单选选择
  public checkBoxList: Array<object> = [
    // {label: `填空`, check: false, value: '1'},
  ];
  constructor() { }

  ngOnInit() {
  }
  public  delRadioItem(index): void {
    this.checkBoxList.splice(index, 1);
    this.selTitle = this.selTitle.slice(0, this.selTitle.lastIndexOf('______')) +
      this.selTitle.slice(this.selTitle.lastIndexOf('______') + 6, this.selTitle.length);
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }

  public  addRadioItem(): void {
    this.checkBoxList.push({label: '填空', check: false, value: this.checkBoxList.length + 1});
    this.selTitle = this.selTitle + '______';
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }

  public  changeIpnutSelect(): void {
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }
  // 设置数据
  public setData(): void {
    this.rightKey = [];
    const list = [];
    const indexList = [];
    this.checkBoxList.forEach((val, index) => {
      // @ts-ignore
      list.push(val.label);
      // @ts-ignore
      indexList.push(index + 1);
      // @ts-ignore
      this.rightKey.push(val.label);
    });
    this.radioTemplate.option = list.join('#');
    this.radioTemplate.order = indexList.join('#');
    this.radioTemplate.subject = this.selTitle;
    this.radioTemplate.rightKey = this.rightKey.join('#');
  }
}
