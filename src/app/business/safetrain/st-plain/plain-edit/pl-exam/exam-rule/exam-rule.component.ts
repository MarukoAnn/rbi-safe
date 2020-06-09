import { Component, OnInit } from '@angular/core';
import {Es} from '../../../../../../common/public/contents';
import {ExamRuleField, ExamRuleFieldClass} from '../../../../../../common/public/Api';
import {LocalStorageService} from '../../../../../../common/services/local-storage.service';

@Component({
  selector: 'app-exam-rule',
  templateUrl: './exam-rule.component.html',
  styleUrls: ['./exam-rule.component.scss']
})
export class ExamRuleComponent implements OnInit {
  public ruleEs: any = Es; // 时间选择器语言本地化
  public ruleOperateField: ExamRuleField = new ExamRuleFieldClass(); // 操作字段
  public ruleDisabled: boolean = false; // 是否可编辑
  public ruleOperateFlag: any ; // 操作标识
  constructor(
    private localSrv: LocalStorageService
  ) { }

  ngOnInit() {
  }
// 操作
  public ruleOperate(flag: string, item?: any) {
    switch (flag) {
      // 保存操作
      case 'save':
        this.localSrv.setObject('safeTestPaper', this.ruleOperateField);
        break;
    }
  }
}
