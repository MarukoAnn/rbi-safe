import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {RadioTemplate} from '../../../public/Api';

@Component({
  selector: 'app-radio-template',
  templateUrl: './radio-template.component.html',
  styleUrls: ['./radio-template.component.scss']
})
export class RadioTemplateComponent implements OnInit {
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
  public RedioList: Array<object> = [
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
    this.RedioList.splice(index, 1);
    this.questionEvent.emit(this.radioTemplate);
  }

  public  addRadioItem(): void {
    this.RedioList.push({label: '选项', check: false, value: this.RedioList.length + 1});
  }

  public  changeIpnutSelect(): void {
    this.setData();
    this.questionEvent.emit(this.radioTemplate);
  }
  // 设置数据
  public setData(): void {
    const list = [];
    const indexList = [];
    this.RedioList.forEach((val, index) => {
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
