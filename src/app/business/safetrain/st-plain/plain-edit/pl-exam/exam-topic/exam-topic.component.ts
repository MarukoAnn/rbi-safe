import { Component, OnInit } from '@angular/core';
import {SafetrainService} from '../../../../../../common/services/safetrain.service';
import {AddEducateFieldClass, PageOption, UpdateEducateFieldClass} from '../../../../../../common/public/Api';

@Component({
  selector: 'app-exam-topic',
  templateUrl: './exam-topic.component.html',
  styleUrls: ['./exam-topic.component.scss']
})
export class ExamTopicComponent implements OnInit {
  public topicData: any[]; // 题库选题列表
  public topicTabActiveIndex: number = 0; // tab切换
  public topicOperateFlag: any; // 操作标识
  public topicOperateModal: boolean = false; // 模态框
  public topicTableData: any[] = [
    {name: '文君', age: 18}
  ]; // 表体数据
  public topicTableSelect: any[]; // 表体数据选择
  public topicPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public topicNowPage: number = 1; // 当前页
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.educateDataInit();
  }

  // 数据初始化
  private educateDataInit() {
    // 初始化题库选题
    this.safeSrv.searchScsQuestionSortInfo().subscribe((res) => {
      this.topicData = res.data;
    });
  }

  // 操作
  public topicOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'select':
        this.topicOperateModal = true;
        break;
    }
  }

  // 分页操作
  public topicPageEvent(page) {
    this.topicNowPage = page;
    // this.plInputCompanyDataInit(page, this.plInputPageOption.pageSize);
  }
}
