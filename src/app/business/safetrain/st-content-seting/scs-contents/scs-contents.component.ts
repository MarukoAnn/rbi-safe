import { Component, OnInit } from '@angular/core';
import {PageOption, ScsContentField, ScsContentFieldClass, TableHeader} from '../../../../common/public/Api';
import {SafetrainService} from '../../../../common/services/safetrain.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-scs-contents',
  templateUrl: './scs-contents.component.html',
  styleUrls: ['./scs-contents.component.scss']
})
export class ScsContentsComponent implements OnInit {
  public contentsPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public contentsTableHeader: TableHeader[] = [
    {field: 'resourceName', header: '文件名'},
    {field: 'resourceType', header: '文件类型'},
    {field: 'operatorName', header: '添加人'},
    {field: 'idt', header: '添加时间'},
  ]; // 表头字段
  public contentsTableData: any[]; // 表体数据
  public contentsNowPage: number = 1; // 当前页
  public contentsOperateFlag: 'save' | 'del' | 'add' ; // 操作标识
  public contentsOperateField: ScsContentField = new ScsContentFieldClass() ; // 操作字段
  public contentsOperateModal: boolean = false; // 模态框
  public contentsClassifyOptions: any; // 模态框
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.specialDataInit(this.contentsNowPage, this.contentsPageOption.pageSize);
    this.safeSrv.getScsContentsClassify().subscribe((res) => {
      console.log(res);
    });
  }
// 数据初始化
  private specialDataInit(pageNo, pageSize) {
    this.safeSrv.getScsContentsList({pageNo, pageSize}).subscribe((res) => {
      this.contentsTableData = res.data.contents;
      this.contentsPageOption.totalRecord = res.data.totalRecord;
      this.contentsOperateFlag = 'add';
    });
  }

  // 角色操作代理请求函数
  private specialHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.contentsOperateModal = false;
      this.specialDataInit(this.contentsNowPage, this.contentsPageOption.pageSize);
    });
  }

  // 特殊台账操作操作
  public contentsOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'add':
        this.contentsOperateModal = true;
        this.contentsOperateField = Object.assign({}, new ScsContentFieldClass());
        break;
      // 保存操作
      case 'save':
        console.log(item);
        // this.specialHttpOperate(this.safeSrv.addArchivesInfo(this.contentsOperateField));
        break;
      // 删除操作
      case 'del':
        console.log('暂时不做');
        break;
    }
  }

  // 分页操作
  public contentsPageEvent(page) {
    console.log(page);
  }
  onBasicUpload(item) {
    console.log(item);
  }
}
