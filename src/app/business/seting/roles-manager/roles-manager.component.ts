import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SetingService} from '../../../common/services/seting.service';
import {nums, Role} from '../../../common/public/Api';
import {initializeTree, objectCopy} from '../../../common/public/contents';
import {GlobalService} from '../../../common/services/global.service';
import {PublicMethodService} from '../../../common/public/public-method.service';

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
    id: null,
    roleName: '',
    whetherSee: nums.one,
    enabled: nums.one,
    sysRolePermissionList: []
  }; // 角色初始化
  public roleWebPermissionTree: any; // web端权限树
  public roleAppPermissionTree: any; // app端权限树
  public roleWebPermissionSelected: any; // web端权限选择
  public roleAppPermissionSelected: any; // app端权限选择
  constructor(
    private themeSrv: ThemeService,
    private setSrv: SetingService,
    private globalSrv: GlobalService,
    private publicSrv: PublicMethodService
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
    });
  }
  // 编辑操作
  public roleUpdateOperate(flag?: 'update'| 'save'|'del'|'permission', item?: any) {
    switch (flag) {
      // 编辑操作初始化
      case 'update':
        this.roleUpdateModal = true;
        this.globalSrv.getLimitTreeData().subscribe((res) => {
          this.roleWebPermissionTree = initializeTree(
            res.data[0].permissionTreeInfoList ? res.data[0].permissionTreeInfoList : [],
            {labelName: 'permissionName', childrenName: 'sysPermissionList'}
            );
          this.roleAppPermissionTree = initializeTree(
            res.data[1].permissionTreeInfoList ? res.data[1].permissionTreeInfoList : [],
            {labelName: 'permissionName', childrenName: 'sysPermissionList'}
            );
        });
        this.roleInputField = objectCopy(this.roleInputField, item);
        break;
      // 编辑保存操作
      case 'save':
        this.roleInputField.sysRolePermissionList = this.roleWebPermissionSelected.map((res) => res.id);
        break;
      // 查看权限操作
      case 'permission':
        this.rolePermissionModal = true;
        this.rolePermissionInfo = initializeTree(
          item.rolePermissionInfoList ? item.rolePermissionInfoList : [],
          {labelName: 'permissionName', childrenName: 'rolePermissionInfos', icon: 'fa fa-clipboard'}
        );
        break;
      // 删除擦走哦
      case 'del':
        console.log('暂时不做');
        break;
    }
  }
  // Paging event (分页事件)
  public rolePageEvent(e): void {
    this.roleDataInit(e, this.rolePageOption.pageSize);
  }
  // search Data (搜索事件)
  public searchDataClick(): void {
    console.log(123);
  }
  // test
  public test(data): any {
    return JSON.stringify(data);
  }
}
