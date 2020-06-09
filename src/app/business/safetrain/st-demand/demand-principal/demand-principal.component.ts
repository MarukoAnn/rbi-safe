import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {PageOption, ReviewInfo, ReviewInfoClass, SpecialField, SpecialFieldClass, TableHeader} from '../../../../common/public/Api';
import {DemandService} from '../../../../common/services/demand.service';
import {GlobalService} from '../../../../common/services/global.service';

@Component({
  selector: 'app-demand-principal',
  templateUrl: './demand-principal.component.html',
  styleUrls: ['./demand-principal.component.scss']
})
export class DemandPrincipalComponent implements OnInit {
  public principalPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public principalTableHeader: TableHeader[] = [
    {field: 'name', header: '姓名'},
    {field: 'gender', header: '性别'},
    {field: 'typeOfWork', header: '工种名称'},
    {field: 'degreeOfEducation', header: '文化程度'},
    {field: 'dateOfIssue', header: '发证日期'},
  ]; // 表头字段
  public principalTableData: any[]; // 表体数据
  public principalNowPage: number = 1; // 当前页
  public principalOperateFlag: any; // 操作标识
  public principalOperateField: SpecialField = new SpecialFieldClass(); // 操作字段
  public principalOperateFieldCopy: SpecialField = new SpecialFieldClass(); // 状态判断用
  public principalOperateModal: boolean = false; // 模态框
  public principalInfoHandle: ReviewInfo = new ReviewInfoClass(); // 取消复审相关处理信息
  constructor(
    private demandSrv: DemandService,
    private globalSrv: GlobalService,
  ) {
    this.principalDataInit(this.principalNowPage, this.principalPageOption.pageSize);
  }

  ngOnInit() {
    this.principalDataInit(this.principalNowPage, this.principalPageOption.pageSize);
  }
  // 数据初始化
  private principalDataInit(pageNo, pageSize) {
   /* this.demandSrv.getPrincipalList({pageNo, pageSize}).subscribe((res) => {
      this.principalTableData = res.data.contents;
      this.principalPageOption.totalRecord = res.data.totalRecord;
    });*/
  }

  // 角色操作代理请求函数
  private principalHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.principalOperateModal = false;
      this.principalDataInit(this.principalNowPage, this.principalPageOption.pageSize);
    });
  }

  // 特殊台账操作操作
  public principalOperate(flag: string, item?: any) {
    switch (flag) {
      // 取消操作初始化
      case 'cancel':
        this.principalOperateModal = true;
        this.principalInfoHandle.id = item.id;
        this.principalInfoHandle.completionStatus = '2';
        break;
      // 编辑操作初始化
      case 'update':
        this.globalSrv.publicGetSpecialInfo({id: item.specialPersonnelId}).subscribe((res) => {
          this.principalOperateField = Object.assign({}, res.data);
          this.principalOperateFieldCopy = Object.assign({}, res.data);
          this.principalInfoHandle.completionStatus = '3';
          this.principalInfoHandle.id = item.id;
          this.principalOperateModal = true;
        });
        break;
      // 保存操作
      case 'save':
        // 完成复审操作
        if (this.principalInfoHandle.completionStatus === '3') {
          this.demandSrv.updateArchivesInfo(this.principalOperateField).subscribe(() => {
            // this.principalHttpOperate(this.demandSrv.handleprincipalInfo(this.principalInfoHandle));
          });
          break;
        }
        // this.principalHttpOperate(this.demandSrv.handleprincipalInfo(this.principalInfoHandle));
        break;
      // 删除操作
      case 'del':
        console.log('暂时不做');
        break;
    }
  }

  // 分页操作
  public principalPageEvent(page) {
    this.principalNowPage = page;
    this.principalDataInit(page, this.principalPageOption.pageSize);
  }
}
