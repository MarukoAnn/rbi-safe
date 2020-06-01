import { Component, OnInit } from '@angular/core';
import {AddEducateFieldClass, EducateField, PageOption, TableHeader, UpdateEducateFieldClass} from '../../../../common/public/Api';
import {SafetrainService} from '../../../../common/services/safetrain.service';
import {Observable} from 'rxjs';
import {objectCopy} from '../../../../common/public/contents';

@Component({
  selector: 'app-archives-educate',
  templateUrl: './archives-educate.component.html',
  styleUrls: ['./archives-educate.component.scss']
})
export class ArchivesEducateComponent implements OnInit {
  public educatePageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public educateTableHeader: TableHeader[] = [
    {field: 'name', header: '姓名'},
    {field: 'idCardNo', header: '身份证'},
    {field: 'gender', header: '性别'},
    {field: 'organizationName', header: '组织名'},
    {field: 'idt', header: '添加时间'},
  ]; // 表头字段
  public educateTableData: any[]; // 表体数据
  public educateNowPage: number = 1; // 当前页
  public educateOperateFlag: 'update' | 'save' | 'del' | 'add' ; // 操作标识
  public educateOperateField: EducateField = new AddEducateFieldClass(); // 操作字段
  public educateOperateModal: boolean = false; // 模态框
  constructor(
    private safeSrv: SafetrainService,
  ) { }

  ngOnInit() {
    this.educateDataInit(this.educateNowPage, this.educatePageOption.pageSize);
  }
  // 数据初始化
  private educateDataInit(pageNo, pageSize) {
    this.safeSrv.getEducateList({pageNo, pageSize}).subscribe((res) => {
      this.educateTableData = res.data.contents;
      this.educatePageOption.totalRecord = res.data.totalRecord;
      this.educateOperateFlag = 'add';
    });
  }

  // 角色操作代理请求函数
  private educateHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.educateOperateModal = false;
      this.educateDataInit(this.educateNowPage, this.educatePageOption.pageSize);
    });
  }

  // 特殊台账操作操作
  public educateOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'add':
        this.educateOperateModal = true;
        this.educateOperateField = Object.assign({}, new AddEducateFieldClass());
        break;
      // 编辑操作初始化
      case 'update':
        this.educateOperateModal = true;
        this.educateOperateField = objectCopy(Object.assign({}, new UpdateEducateFieldClass()), item);
        break;
      // 保存操作
      case 'save':
        // 修改保存
        if (this.educateOperateField.id) {
          this.educateHttpOperate(this.safeSrv.updateEducateInfo(this.educateOperateField));
        }
        // 新增保存
        else {
          this.educateHttpOperate(this.safeSrv.addEducateInfo(this.educateOperateField));
        }
        break;
      // 删除操作
      case 'del':
        if (window.confirm('您确定需要删除吗？')) {
          this.educateHttpOperate(this.safeSrv.delEducateInfo({data: [{id: item.id}]}));
        }
        break;
    }
  }

  // 分页操作
  public educatePageEvent(page) {
    this.educateNowPage = page;
    this.educateDataInit(page, this.educatePageOption.pageSize);
  }
}
