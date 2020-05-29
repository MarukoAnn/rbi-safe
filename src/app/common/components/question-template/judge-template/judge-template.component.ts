import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RadioTemplate} from '../../../public/Api';

@Component({
  selector: 'app-judge-template',
  templateUrl: './judge-template.component.html',
  styleUrls: ['./judge-template.component.scss']
})
export class JudgeTemplateComponent implements OnInit {
  public selTitle: string = '请选择一个选项(单选)';
  @Output()
  public questionEvent: EventEmitter<any> = new EventEmitter<any>();
  public radioTemplate: RadioTemplate = {
    subject: '',
    option: '',
    rightKey: '',
    order: ''
  };
  public rightKey: string = '1';

  // 单选选择
  public judgeList: Array<object> = [
    {label: `对`, check: false, value: '1'},
    {label: '错', check: false, value: '2'},
  ];
  constructor() { }

  ngOnInit() {
  }

  public  changeIpnutSelect(): void {
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }
  // 设置数据
  public setData(): void {
    const list = [];
    const indexList = [];
    this.judgeList.forEach((val, index) => {
      // @ts-ignore
      list.push(val.label);
      // @ts-ignore
      indexList.push(index + 1);
      // @ts-ignore
      if (val.value.toString() === this.rightKey){
        // @ts-ignore
        this.radioTemplate.rightKey = val.label;
      }
    });
    this.radioTemplate.option = list.join('#');
    this.radioTemplate.order = indexList.join('#');
    this.radioTemplate.subject = this.selTitle;
  }
}
