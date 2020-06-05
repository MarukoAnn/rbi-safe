import { Component, OnInit } from '@angular/core';
import {PageOption, TableHeader} from '../../../../../common/public/Api';
import {SafetrainService} from '../../../../../common/services/safetrain.service';

@Component({
  selector: 'app-pt-unprocessed',
  templateUrl: './pt-unprocessed.component.html',
  styleUrls: ['./pt-unprocessed.component.scss']
})
export class PtUnprocessedComponent implements OnInit {
  public unprocessedPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public unprocessedTableHeader: TableHeader[] = [
    {field: 'name', header: '姓名'},
    {field: 'trainingTypeName', header: '培训类型名称'},
    {field: 'trainingContent', header: '培训内容'},
    {field: 'proposedTime', header: '提报时间'},
  ]; // 表头字段
  public unprocessedTableData: any[]; // 表体数据
  public unprocessedNowPage: number = 1; // 当前页
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.unprocessedDataInit(this.unprocessedNowPage, this.unprocessedPageOption.pageSize);
  }
  // 数据初始化
  private unprocessedDataInit(pageNo, pageSize) {
    this.safeSrv.getProgramList({pageNo, pageSize, processingStatus: 1}).subscribe((res) => {
      this.unprocessedTableData = res.data.contents;
      this.unprocessedPageOption.totalRecord = res.data.totalRecord;
    });
  }
  // 分页操作
  public unprocessedPageEvent(page) {
    this.unprocessedNowPage = page;
    this.unprocessedDataInit(page, this.unprocessedPageOption.pageSize);
  }
}
