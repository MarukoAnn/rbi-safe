import {Component, OnInit} from '@angular/core';
import {EveryCategory, OrgTree, PageOption, TableHeader, TrainingField, TrainingFieldAddClass} from '../../../../../common/public/Api';
import {Es, orgInitializeTree} from '../../../../../common/public/contents';
import {GlobalService} from '../../../../../common/services/global.service';
import {SafetrainService} from '../../../../../common/services/safetrain.service';

@Component({
  selector: 'app-pl-input',
  templateUrl: './pl-input.component.html',
  styleUrls: ['./pl-input.component.scss']
})
export class PlInputComponent implements OnInit {
  public plInputDropdownOptions: any; // 下拉配置项
  public plInputDropdownSelected: any; // 下拉选择
  public plInputOrgTree: OrgTree[] = []; // 树配置项
  public plInputOrgTreeSelect: OrgTree = {}; // 树选择
  public plInputOperateField: TrainingField = new TrainingFieldAddClass(); // 操作字段
  public plInputOperateModal: boolean = false; // 模态框
  public plInputOperateFlag: any ; // 操作标识
  public plInputEs: any = Es;
  public plInputPageOption: PageOption = {
    pageSize: 8, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public plInputTableHeader: TableHeader[] = [
    {field: 'name', header: '姓名'},
    {field: 'employeeNumber', header: '员工号'},
    {field: 'idCardNo', header: '身份证'},
    {field: 'gender', header: '性别'},
    {field: 'position', header: '所在岗位'},
    {field: 'degreeOfEducation', header: '文化程度'},
  ]; // 表头字段
  public plInputTableData: any[]; // 表体数据
  public plInputTableSelect: any[]; // 表体数据选择
  public plInputTableSelectName: any = '请选择受训单位人员'; // 表体数据选择名字
  public plInputNowPage: number = 1; // 当前页
  constructor(
    private globalSrv: GlobalService,
    private safeSrv: SafetrainService,
  ) { }
  ngOnInit() {
    this.plInputDataInit();
  }
  // 数据初始化
  private plInputDataInit() {
    // 初始化培训类型
    this.globalSrv.publicGetSafeTrainingType().subscribe((res) => {
      this.plInputDropdownOptions = res.data;
    });
    // 初始化组织树
    this.globalSrv.getOrgazitionTreeData().subscribe(
      (res) => {
        this.plInputOrgTree = orgInitializeTree(res.data);
      }
    );
    // 初始化公司人员
    this.plInputCompanyDataInit(this.plInputNowPage, this.plInputPageOption.pageSize);
  }

  //  公司人员分页
  private plInputCompanyDataInit(pageNo, pageSize) {
    this.globalSrv.publicGetCompanyPerson({pageNo, pageSize}).subscribe((res) => {
      this.plInputTableData = res.data.contents;
      this.plInputPageOption.totalRecord = res.data.totalRecord;
    });
  }

  // 操作
  public plInputOperate(flag: string, item?: any) {
    switch (flag) {
      // 添加操作初始化
      case 'add':
        if (this.plInputDropdownSelected && this.plInputOrgTreeSelect && this.plInputTableSelect) {
          this.plInputOperateField.trainingTypeId = this.plInputDropdownSelected.id;
          this.plInputOperateField.organizationTrainingDepartmentId = this.plInputOrgTreeSelect.id;
          this.plInputOperateField.targetSet = this.plInputTableSelect.map((res) => res.id).join(',');
          this.safeSrv.addReportsInfo(this.plInputOperateField).subscribe(() => this.plInputOperateField = new TrainingFieldAddClass());
          break;
        }
        window.alert('请把参数填写完整');
        break;
      case 'tree':
        this.plInputOperateModal = true;
        break;
      case 'strain':
        this.plInputOperateModal = true;
        break;
      case 'select':
        this.plInputOperateModal = false;
        if (this.plInputTableSelect) {
          this.plInputTableSelectName = this.plInputTableSelect.map((res) => res.name).join(',');
        }
        break;
    }
  }

  // 分页操作
  public plInputPageEvent(page) {
    this.plInputNowPage = page;
    this.plInputCompanyDataInit(page, this.plInputPageOption.pageSize);
  }
}
