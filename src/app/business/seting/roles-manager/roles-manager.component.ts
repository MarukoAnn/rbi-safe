import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SetingService} from '../../../common/services/seting.service';
import {nums, Role, TreeOption} from '../../../common/public/Api';
import {initializeTree} from '../../../common/public/contents';
import {GlobalService} from '../../../common/services/global.service';

@Component({
  selector: 'app-roles-manager',
  templateUrl: './roles-manager.component.html',
  styleUrls: ['./roles-manager.component.scss']
})
export class RolesManagerComponent implements OnInit {
  public themeSub: Subscription;
  public roleTableHeader: any[] = [
    {field: 'roleName', header: '角色名称'},
    {field: 'whetherSee', header: '是否可见下级'},
    {field: 'enabled', header: '是否启用'},
  ]; // 表格组件表头内容
  public roleTableData: Role[] = []; // 表格组件表体内容
  public roleSelectedData: Role = {}; // 表格组件所选择的行
  public rolePageOption = {
    pageSize: 10, // 默认显示多少条
    totalRecord: null // 总条数
  }; // 分页组件配置
  public rolePermissionInfo: any; // 角色权限信息
  public rolePermissionModal: boolean = false; // 角色权限详情modal
  public roleUpdateModal: boolean = false; // 角色编辑modal
  public roleInputField: Role = {
    whetherSee: nums.one,
    enabled: nums.one
  }; // 角色编辑modal
  public roleWebPermissionTree: any; // web端权限树
  public roleAppPermissionTree: any; // app端权限树
  public roleWebPermissionSelected: any; // web端权限选择
  public roleAppPermissionSelected: any; // app端权限选择
  constructor(
    private themeSrv: ThemeService,
    private setSrv: SetingService,
    private globalSrv: GlobalService
  ) {
    this.themeSub = this.themeSrv.changeEmitted$.subscribe(
      value => {}
    );
  }


  ngOnInit() {
    this.roleDataInit(1, this.rolePageOption.pageSize);
  }
  // 数据初始化
  public roleDataInit(pageNo, pageSize) {
    this.setSrv.getRoleInfoPageData(
      {pageNo, pageSize}
    ).subscribe((res) => {
      this.roleTableData = res.data.contents;
      this.rolePageOption.totalRecord = res.data.totalRecord;
      this.rolePermissionInfo = initializeTree(
        res.data.contents[0].rolePermissionInfoList,
        {labelName: 'permissionName', childrenName: 'rolePermissionInfos', icon: 'fa fa-clipboard'}
        );
    });
  }
  // search Data (搜索事件)
  public searchDataClick(): void {
    console.log(123);
  }
  // 编辑操作
  public roleUpdateOperate(flag?: 'click'| 'save') {
    switch (flag) {
      case 'click':
        this.roleUpdateModal = true;
        this.globalSrv.getLimitTreeData().subscribe((res) => {
          this.roleWebPermissionTree = initializeTree(
            res.data[0].permissionTreeInfoList ? res.data[0].permissionTreeInfoList : null,
            {labelName: 'permissionName', childrenName: 'sysPermissionList'}
            );
          this.roleAppPermissionTree = initializeTree(
            res.data[1].permissionTreeInfoList ? res.data[1].permissionTreeInfoList : [],
            {labelName: 'permissionName', childrenName: 'sysPermissionList'}
            );
        });
        break;
    }
  }
  public rolePermissionSelect(item: any) {
    console.log(item);
    console.log(this.roleAppPermissionSelected);
  }
  // Paging event (分页事件)
  public rolePageEvent(e): void {
    this.roleDataInit(e, this.rolePageOption.pageSize);
  }
  // test
  public test(data): any {
    return JSON.stringify(data);
  }
}
