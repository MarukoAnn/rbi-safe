import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {QuestionTemplate} from '../../../public/Api';

@Component({
  selector: 'app-checkbox-template',
  templateUrl: './checkbox-template.component.html',
  styleUrls: ['./checkbox-template.component.scss']
})
export class CheckboxTemplateComponent implements OnInit {
  public selTitle: string = '请选择单个或者多个选项(多选)';
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
  public rightKey: Array<string> = ['1'];

  // 单选选择
  public checkBoxList: Array<object> = [
    {label: `选项`, check: false, value: '1'},
    {label: '选项', check: false, value: '2'},
    {label: '选项', check: false, value: '3'},
    {label: '选项', check: false, value: '4'},
  ];
  constructor() { }

  ngOnInit() {
  }
  public  delRadioItem(index): void {
    this.setData();
    this.checkBoxList.splice(index, 1);
    this.questionEvent.emit(this.radioTemplate);
  }

  public  addRadioItem(): void {
    this.checkBoxList.push({label: '选项', check: false, value: this.checkBoxList.length + 1});
  }

  public  changeIpnutSelect(): void {
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }
  // 设置数据
  public setData(): void {
    const list = [];
    const indexList = [];
    const rightList = [];
    this.checkBoxList.forEach((val, index) => {
      // @ts-ignore
      list.push(val.label);
      // @ts-ignore
      indexList.push(index + 1);
      // @ts-ignore
    });
    this.radioTemplate.option = list.join('#');
    this.radioTemplate.order = indexList.join('#');
    this.radioTemplate.subject = this.selTitle;
    this.radioTemplate.rightKey = this.rightKey.join('#');
    this.radioTemplate.score = this.score;
  }

  public clearData(): void {
      this.checkBoxList = [
        {label: '选项', check: false, value: '1'},
        {label: '选项', check: false, value: '2'},
        {label: '选项', check: false, value: '3'},
        {label: '选项', check: false, value: '4'},
      ];
      this.selTitle = '请选择单个或者多个选项(多选)';
      this.rightKey = ['1'];
      this.score = 2;
  }
}
