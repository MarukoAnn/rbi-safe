import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionTemplate} from '../../../public/Api';

@Component({
  selector: 'app-fill-vacant-template',
  templateUrl: './fill-vacant-template.component.html',
  styleUrls: ['./fill-vacant-template.component.scss']
})
export class FillVacantTemplateComponent implements OnInit {

  public selTitle: string = '请输入填空题目';
  public score: number = 2;
  @Output()
  public questionEvent: EventEmitter<any> = new EventEmitter<any>();
  public radioTemplate: QuestionTemplate = {
    subject: '',
    option: '',
    rightKey: '',
    order: '',
    score: null
  };
  public rightKey: Array<string> = [];
  // 单选选择
  public checkBoxList: Array<object> = [];
  constructor() { }

  ngOnInit() {
  }
  public  delRadioItem(index): void {
    this.checkBoxList.splice(index, 1);
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }

  public  addRadioItem(): void {
    this.checkBoxList.push({label: '填空', check: false, value: this.checkBoxList.length + 1, num: this.selTitle + 1});
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
    this.radioTemplate.score = this.score;
  }

 // 清除数据
 public  clearData(): void {
     this.checkBoxList = [];
     this.rightKey = [];
     this.selTitle = '请输入填空题目';
     this.score = 2;
 }
}
