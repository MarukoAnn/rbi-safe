import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {TopicFields} from '../../../public/Api';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.scss']
})
export class TopicComponent implements OnInit, OnChanges {
  @Input() public topicListData: TopicFields;
  @Input() public delable: boolean = false; // 控制是否具备删除按钮
  @Output() private delChange: EventEmitter<any> = new EventEmitter<any>();
  @Input() public optionHidden: boolean = true; // 答题选项是否隐藏
  @Input() public optionCtrlAble: boolean = true; // 答题选项是否可控
  public topicOperateFlag: any;

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
  // 操作
  public topicOperate(flag: string, id?: any) {
    switch (flag) {
      // 删除
      case 'del':
        this.delChange.next({id});
        break;
    }
  }
}
