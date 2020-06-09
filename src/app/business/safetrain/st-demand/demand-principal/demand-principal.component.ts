import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {
  CanclePrincipoal,
  PageOption,
  ReviewInfo,
  ReviewInfoClass, ReviewPrincipoal,
  SpecialField,
  SpecialFieldClass,
  TableHeader
} from '../../../../common/public/Api';
import {DemandService} from '../../../../common/services/demand.service';
import {GlobalService} from '../../../../common/services/global.service';
import {PublicMethodService} from '../../../../common/public/public-method.service';
import {Es} from '../../../../common/public/contents';

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
    {field: 'gender', header: '单位'},
    {field: 'degreeOfEducation', header: '文化程度'},
    {field: 'dateOfIssue', header: '发证日期'},
    {field: 'termOfValidity', header: '有效期'},
    {field: 'typeOfCertificate', header: '合格证类型'},
  ]; // 表头字段
  public principalTableData: any[]; // 表体数据
  public principalNowPage: number = 1; // 当前页
  public principalOperateFlag: any; // 操作标识
  public canclePrincipoal: CanclePrincipoal = new CanclePrincipoal(); // 取消操作
  public reviewPrincipoal: ReviewPrincipoal = new ReviewPrincipoal(); // 取消操作
  public reviewPrincipoalCopy: ReviewPrincipoal = new ReviewPrincipoal(); // 取消操作
  public principalOperateModal: boolean = false; // 模态框
  public esDate: object = Es;
  constructor(
    private demandSrv: DemandService,
    private globalSrv: GlobalService,
    private toolSrv: PublicMethodService,
  ) {
    this.principalDataInit(this.principalNowPage, this.principalPageOption.pageSize);
  }

  ngOnInit() {
    this.principalDataInit(this.principalNowPage, this.principalPageOption.pageSize);
  }
  // 数据初始化
  private principalDataInit(pageNo, pageSize) {
    this.demandSrv.getPrincipalPageInfo({pageNo, pageSize}).subscribe((res) => {
      console.log(res);
      this.principalTableData = res.data.contents;
      this.principalPageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 角色操作代理请求函数
  private principalHttpOperate(test: Observable<any>) {
    test.subscribe(() => {
      // 操作成功后重新初始化数据列表
      this.principalOperateModal = false;
      this.reviewPrincipoal = new ReviewPrincipoal();
      this.canclePrincipoal = new CanclePrincipoal();
      this.principalDataInit(this.principalNowPage, this.principalPageOption.pageSize);
    });
  }

  // 特殊台账操作操作
  public principalOperate(flag: string, item?: any) {
    switch (flag) {
      // 取消
      case 'cancle':
        this.principalOperateModal = true;
        this.canclePrincipoal.id = item.id;
        break;
      // 审核
      case 'review':
        console.log(123);
        this.principalOperateModal = true;
        for (let key in this.reviewPrincipoal){
          if (key !== 'id' && key !== 'safeAdministratorId'){
            if (item[key]){
              this.reviewPrincipoal[key] = item[key].split('至');
              this.reviewPrincipoal[key][0] = new Date(this.reviewPrincipoal[key][0]);
              this.reviewPrincipoal[key][1] = new Date(this.reviewPrincipoal[key][1]);
            }
          }else {
            this.reviewPrincipoal[key] = item[key];
          }
          this.reviewPrincipoalCopy = Object.assign({}, this.reviewPrincipoal);
        }
        console.log(this.reviewPrincipoal);
        break;
    }
  }

  public  principalSureOperate(flag: string): void {
      switch (flag) {
        case 'cancle': this.canclePrincipoal.reasonForHandling !== '' ?
          this.toolSrv.setConfirmation('取消审核', '取消审核', () => {
            this.principalHttpOperate( this.demandSrv.canclePrincipalReveiew(this.canclePrincipoal)) ;
          }) :
          this.toolSrv.setToast('error', '操作错误', '请填写取消原因');
          break;
        case 'review':
          this.toolSrv.setConfirmation('完成复审', '完成复审', () => {
            this.principalHttpOperate(this.demandSrv.principalReveiewToPass(this.reviewPrincipoal));
          });
          break;
      }
  }

  // 分页操作
  public principalPageEvent(page) {
    this.principalNowPage = page;
    this.principalDataInit(page, this.principalPageOption.pageSize);
  }
}
