import { Component, OnInit } from '@angular/core';
import {PageOption, TableHeader} from '../../../../../common/public/Api';
import {SafetrainService} from '../../../../../common/services/safetrain.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-pl-train',
  templateUrl: './pl-train.component.html',
  styleUrls: ['./pl-train.component.scss']
})
export class PlTrainComponent implements OnInit {
  public traTabActiveIndex: number = 0;
  public contentsPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public contentsTableHeader: TableHeader[] = [
    {field: 'resourceName', header: '文件名'},
    {field: 'resourceType', header: '文件类型'},
  ]; // 表头字段
  public contentsTableData: any[]; // 表体数据
  public contentsNowPage: number = 1; // 当前页
  public contentsClassifyOptions: any[] = []; // 下拉选框option
  public contentsClassifySelected: any; // 下拉选框的选择内容
  public contentsOperateFlag: string ; // 操作标识
  public contentsAddList: any[] = [] ; // 操作标识
  public contentsAddFileList: any[] = [] ; // 操作标识
  public contentsAddVideoList: any[] = [] ; // 操作标识
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.contentsDataInit(this.contentsNowPage, this.contentsPageOption.pageSize);
    // 分类初始化
    this.safeSrv.getScsContentsClassify().subscribe((res) => {
      this.contentsClassifyOptions = res.data;
    });
  }

  // 数据初始化
  private contentsDataInit(pageNo, pageSize) {
    this.safeSrv.getScsContentsList({pageNo, pageSize}).subscribe((res) => {
      this.contentsTableData = res.data.contents.map((item) => {
        item.active = 0;
        return item;
      });
      this.contentsPageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 操作代理请求函数
  private contentsHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.contentsDataInit(this.contentsNowPage, this.contentsPageOption.pageSize);
    });
  }

  // 搜索请求
  private contentsSearchOperate() {
    const searchField = {
      pageNo: this.contentsNowPage,
      pageSize: this.contentsPageOption.pageSize,
      value: this.contentsClassifySelected.id
    };
    this.safeSrv.searchScsContentsInfo(searchField).subscribe((res) => {
      this.contentsTableData = res.data.contents;
      this.contentsPageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 操作
  public contentsOperate(flag: string, item?: any, index?: any) {
    switch (flag) {
      // 添加课程
      case 'add':
        this.contentsTableData[index].active = 1;
        this.contentsAddList.push(Object.assign({}, item, {index}));
        this.contentsAddFileList = this.contentsAddList.filter((res) => res.resourceType === '文件');
        this.contentsAddVideoList = this.contentsAddList.filter((res) => res.resourceType === '视频');
        break;
      // 删除课程
      case 'del':
        this.contentsAddList.splice(index, 1);
        this.contentsTableData = this.contentsTableData.map((res, sIndex) => {
          if (sIndex === item.index) {
            res.active = 0;
          }
          return res;
        });
        break;
      // 筛选搜索
      case 'search':
        if (!this.contentsClassifySelected) {
          this.contentsDataInit(this.contentsNowPage = 1, this.contentsPageOption.pageSize);
          break;
        }
        this.contentsSearchOperate();
        break;
      // 搜索重置
      case 'reset':
        if ( !this.contentsClassifySelected) {
          this.contentsDataInit(this.contentsNowPage = 1, this.contentsPageOption.pageSize);
        }
        break;
    }
  }

  // 分页操作
  public contentsPageEvent(page) {
    this.contentsNowPage = page;
    if (!this.contentsClassifySelected) {
      this.contentsDataInit(page, this.contentsPageOption.pageSize);
      return;
    }
    this.contentsSearchOperate();
  }
}
