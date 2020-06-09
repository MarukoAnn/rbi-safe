import { Component, OnInit } from '@angular/core';
import {Es} from '../../../../../../common/public/contents';
import {ExamRuleField, ExamRuleFieldClass} from '../../../../../../common/public/Api';

@Component({
  selector: 'app-exam-rule',
  templateUrl: './exam-rule.component.html',
  styleUrls: ['./exam-rule.component.scss']
})
export class ExamRuleComponent implements OnInit {
  public ruleEs: any = Es; // 时间选择器语言本地化
  public ruleOperateField: ExamRuleField = new ExamRuleFieldClass(); // 操作字段
  public ruleDisabled: boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
