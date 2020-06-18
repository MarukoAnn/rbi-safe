import { Component, OnInit } from '@angular/core';
import {AddScsContentTypeClass, PageOption, ScsContentType, TableHeader, UpdateEducateFieldClass, UpdateScsContentTypeClass} from '../../../../common/public/Api';
import {SafetrainService} from '../../../../common/services/safetrain.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-scs-contents-type',
  templateUrl: './scs-contents-type.component.html',
  styleUrls: ['./scs-contents-type.component.scss']
})
export class ScsContentsTypeComponent implements OnInit {
  public typePageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public typeTableHeader: TableHeader[] = [
    {field: 'contentCategoryName', header: '分类名称'},
    {field: 'idt', header: '添加时间'},
  ]; // 表头字段
  public typeTableData: any[]; // 表体数据
  public typeNowPage: number = 1; // 当前页
  public typeOperateFlag: string ; // 操作标识
  public typeOperateField: ScsContentType = new AddScsContentTypeClass(); // 操作字段
  public typeOperateModal: boolean = false; // 模态框
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.typeDataInit(this.typeNowPage, this.typePageOption.pageSize);
  }
  // 数据初始化请求
  private typeDataInit(pageNo, pageSize) {
    this.safeSrv.getScsContentsTypeList({pageNo, pageSize}).subscribe((res) => {
      this.typeTableData = res.data.contents;
      this.typePageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 操作代理请求函数
  private typeHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.typeOperateModal = false;
      this.typeDataInit(this.typeNowPage, this.typePageOption.pageSize);
      this.typeOperateField  = new AddScsContentTypeClass();
    });
  }

  // 搜索请求
  private typeSearchOperate(pageNo, pageSize, contentCategoryName) {
    this.safeSrv.searchScsContentsTypeInfo({pageNo, pageSize, contentCategoryName}).subscribe((res) => {
      this.typeTableData = res.data.contents;
      this.typePageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 操作
  public typeOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作
      case 'add':
        this.typeOperateModal = true;
        this.typeOperateField = new AddScsContentTypeClass();
        break;
      // 搜索操作
      case 'search':
        if (this.typeOperateField.contentCategoryName) {
          this.typeSearchOperate(this.typeNowPage, this.typePageOption.pageSize, this.typeOperateField.contentCategoryName);
        }
        break;
      // 搜索重置
      case 'reset':
        this.typeDataInit(this.typeNowPage, this.typePageOption.pageSize);
        this.typeOperateField = new AddScsContentTypeClass();
        break;
      // 修改操作
      case 'update':
        this.typeOperateModal = true;
        this.typeOperateField = Object.assign({}, new UpdateScsContentTypeClass(), item);
        break;
      // 保存操作
      case 'save':
        // 修改保存
        if (this.typeOperateField.id) {
          this.typeHttpOperate(this.safeSrv.updateScsContentsTypeInfo(this.typeOperateField));
        }
        // 新增保存
        else {
          this.typeHttpOperate(this.safeSrv.addScsContentsTypeInfo(this.typeOperateField));
        }
        break;
      // 删除操作
      case 'del':
        if (window.confirm('您确认想删除吗？')) {
          this.typeHttpOperate(this.safeSrv.delScsContentsTypeInfo({id: item.id}));
        }
        break;
    }
  }

  // 分页操作
  public typePageEvent(page) {
    this.typeNowPage = page;
    // 搜索分页
    if (this.typeOperateField.contentCategoryName) {
      this.typeSearchOperate(this.typeNowPage, this.typePageOption.pageSize, this.typeOperateField.contentCategoryName);
      return;
    }
    // 普通分页
    this.typeDataInit(page, this.typePageOption.pageSize);
  }
}
