import {Component, OnInit} from '@angular/core';
import { PageOption, SpecialField, SpecialFieldClass, TableHeader} from '../../../../common/public/Api';
import {Observable} from 'rxjs';
import {SafetrainService} from '../../../../common/services/safetrain.service';
import {objectCopy} from '../../../../common/public/contents';

@Component({
  selector: 'app-archives-special',
  templateUrl: './archives-special.component.html',
  styleUrls: ['./archives-special.component.scss']
})
export class ArchivesSpecialComponent implements OnInit {
  public specialPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public specialTableHeader: TableHeader[] = [
    {field: 'name', header: '姓名'},
    {field: 'typeOfWork', header: '工种名称'},
    {field: 'gender', header: '性别'},
    {field: 'degreeOfEducation', header: '文化程度'},
    {field: 'dateOfIssue', header: '发证日期'},
  ]; // 表头字段
  public specialTableData: any[]; // 表体数据
  public specialNowPage: number = 1; // 当前页
  public specialOperateFlag: 'update' | 'save' | 'del' | 'add' ; // 操作标识
  public specialOperateField: SpecialField = new SpecialFieldClass(); // 操作字段
  public specialOperateModal: boolean = false; // 模态框
  constructor(
    private safeSrv: SafetrainService,
  ) {
  }

  ngOnInit() {
    this.specialDataInit(this.specialNowPage, this.specialPageOption.pageSize);
  }

  // 数据初始化
  private specialDataInit(pageNo, pageSize) {
    this.safeSrv.getArchivesList({pageNo, pageSize}).subscribe((res) => {
      this.specialTableData = res.data.contents;
      this.specialPageOption.totalRecord = res.data.totalRecord;
      this.specialOperateFlag = 'add';
    });
  }

  // 角色操作代理请求函数
  private specialHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.specialOperateModal = false;
      this.specialDataInit(this.specialNowPage, this.specialPageOption.pageSize);
    });
  }

  // 特殊台账操作操作
  public specialOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'add':
        this.specialOperateModal = true;
        this.specialOperateField = Object.assign({}, new SpecialFieldClass());
        break;
      // 编辑操作初始化
      case 'update':
        this.specialOperateModal = true;
        this.specialOperateField = objectCopy(Object.assign({}, this.specialOperateField), item);
        break;
      // 保存操作
      case 'save':
        // 修改保存
        if (this.specialOperateField.id) {
          this.specialHttpOperate(this.safeSrv.updateArchivesInfo(this.specialOperateField));
        }
        // 新增保存
        else {
          this.specialHttpOperate(this.safeSrv.addArchivesInfo(this.specialOperateField));
      }
        break;
      // 删除操作
      case 'del':
        console.log('暂时不做');
        break;
    }
  }

  // 分页操作
  public specialPageEvent(page) {
    this.specialNowPage = page;
    this.specialDataInit(page, this.specialPageOption.pageSize);
  }
}
