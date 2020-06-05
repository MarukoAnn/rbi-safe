import {Component, OnInit} from '@angular/core';
import {OrgTree, TrainingField, TrainingFieldAddClass} from '../../../../common/public/Api';
import {Es, orgInitializeTree} from '../../../../common/public/contents';
import {GlobalService} from '../../../../common/services/global.service';

@Component({
  selector: 'app-demand-report',
  templateUrl: './demand-report.component.html',
  styleUrls: ['./demand-report.component.scss']
})
export class DemandReportComponent implements OnInit {
  public reportOperateField: TrainingField = new TrainingFieldAddClass(); // 操作字段
  public reportDropdownOptions: any;
  public reportDropdownSelected: any;
  public reportOperateModal: boolean = false; // 模态框
  public reportOperateFlag: any ; // 操作标识
  public reportEs: any = Es;
  public reportOrgTree: OrgTree[] = [];
  public reportOrgTreeSelect: OrgTree = {};

  constructor(
    private globalSrv: GlobalService,
  ) {
  }

  ngOnInit() {
    this.reportDataInit();
  }

  // 数据初始化
  private reportDataInit() {
    // 初始化培训类型
    this.globalSrv.publicGetSafeTrainingType().subscribe((res) => {
      this.reportDropdownOptions = res.data;
    });
    // 初始化组织树
    this.globalSrv.getOrgazitionTreeData().subscribe(
      (res) => {
        this.reportOrgTree = orgInitializeTree(res.data);
      }
    );
  }

  // 特殊台账操作操作
  public reportOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'add':
        this.reportOperateField.trainingTypeId = this.reportDropdownSelected.id;
        this.reportOperateField.organizationTrainingDepartmentId = this.reportOrgTreeSelect.id;
        break;
      case 'tree':
        this.reportOperateModal = true;
        break;
      case 'strain':
        this.reportOperateModal = true;
        break;
    }
  }
}
