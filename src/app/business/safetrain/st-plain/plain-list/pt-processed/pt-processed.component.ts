import { Component, OnInit } from '@angular/core';
import {PageOption, ProgramField, ProgramFieldClass, TableHeader} from '../../../../../common/public/Api';
import {SafetrainService} from '../../../../../common/services/safetrain.service';

@Component({
  selector: 'app-pt-processed',
  templateUrl: './pt-processed.component.html',
  styleUrls: ['./pt-processed.component.scss']
})
export class PtProcessedComponent implements OnInit {
  public processedPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public processedTableHeader: TableHeader[] = [
    {field: 'trainingTypeName', header: '培训类型名称'},
    {field: 'trainingContent', header: '培训内容'},
    {field: 'proposedTime', header: '提报时间'},
    {field: 'processingStatus', header: '处理状态'},
    {field: 'name', header: '提报人'},
  ]; // 表头字段
  public processedTableData: any[]; // 表体数据
  public processedNowPage: number = 1; // 当前页
  public processedOperateFlag: any ; // 操作标识
  public processedOperateField: ProgramField = new ProgramFieldClass(); // 操作字段
  public processedOperateModal: boolean = false; // 模态框
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.processedDataInit(this.processedNowPage, this.processedPageOption.pageSize);
  }
  // 数据初始化
  private processedDataInit(pageNo, pageSize) {
    this.safeSrv.getProgramList({pageNo, pageSize, processingStatus: 0}).subscribe((res) => {
      console.log(res.data.contents);
      this.processedTableData = res.data.contents;
      this.processedPageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 特殊台账操作操作
  public processedOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'detail':
        this.processedOperateModal = true;
        this.processedOperateField = Object.assign({}, new ProgramFieldClass());
        break;
    }
  }

  // 分页操作
  public processedPageEvent(page) {
    this.processedNowPage = page;
    this.processedDataInit(page, this.processedPageOption.pageSize);
  }

}
