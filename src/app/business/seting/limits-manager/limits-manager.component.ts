import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SetingService} from '../../../common/services/seting.service';
import {PublicMethodService} from '../../../common/public/public-method.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../../common/services/global.service';
import {OragizationTree, TableHeader, TreeNode} from '../../../common/public/Api';
import {initializeTableTree, initializeTree, orgInitializeTree} from '../../../common/public/contents';

// import {OragizationTree, TreeNode} from '../../../common/model/persion-manger.model';

@Component({
  selector: 'app-limits-manager',
  templateUrl: './limits-manager.component.html',
  styleUrls: ['./limits-manager.component.scss']
})
export class LimitsManagerComponent implements OnInit {
  public educateTableHeader: TableHeader[] = [
    {field: 'name', header: '权限名称'},
    {field: 'id', header: '权限id'},
    {field: 'operateCode', header: '操作标识'},
    {field: 'description', header: '权限描述'},
  ]; // 表头字段
  public educateTableData: any[]; // 表体数据
  public optionTable: any;
  public limitSelect: any = null;
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public themeSub: Subscription;
  public limitContent: any;
  public pageNo = 1;
  public pageOption: any;
  // 删除相关
  public delData = [];
  // 添加相关
  public addLimit: FormGroup;
  public showAddLimitDialog: boolean;
  // 修改xiangguan
  public showEditLimitDialog: boolean;
  // 搜索相关
  public searchData: any;

  // 权限树相关
  public dataTrees: OragizationTree[];
  public dataTree: OragizationTree;
  public treeDialog: boolean;

  constructor(
    private themeSrv: ThemeService,
    private setSrv: SetingService,
    private toolSrv: PublicMethodService,
    private fb: FormBuilder,
    private dataPipe: DatePipe,
    private globalSrv: GlobalService
  ) {
    this.themeSub = this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
        this.setTableOption(this.limitContent);
      }
    );
  }


  ngOnInit() {
    this.addLimit = this.fb.group({
      permissionName: new FormControl('', Validators.required),
      operateCode: new FormControl('', Validators.required),
      systemId: new FormControl('', Validators.required),
      enabled: new FormControl('', Validators.required),
      description: new FormControl(''),
      parentId: new FormControl(''),
      name: new FormControl(''),
      id: new FormControl(''),
    });
    this.initLimitData();
  }

  public initLimitData(): void {
    /*this.setSrv.getPermissionInfoPageData({pageNo: this.pageNo, pageSize: 10}).subscribe(val => {
      this.limitContent = val.data.contents.map(v => {
        v.enabled  = v.enabled === 1 ? '启用' : '未启用';
        return v;
      });
      this.pageOption = {totalRecord: val.data.totalRecord, pageSize: val.data.pageSize};
      // this.pageOption = {pageSize: ''};
      this.setTableOption(this.limitContent);
    });*/
    this.setSrv.getPermissionTreeInfo({pageNo: this.pageNo, pageSize: 10000}).subscribe(val => {
      this.educateTableData = initializeTableTree(
        val.data.contents ? val.data.contents : [],
        {labelName: 'permissionName', childrenName: 'sysPermissionList'}
      );
    });
  }

  public selectData(e): void {
    this.limitSelect = e;
  }

  public DetailClick(e): void {
    if (this.limitSelect === null) {
      window.alert('请选择需要操作的项！');
      return;
    }
    if (e.label === '删除') {
      this.toolSrv.setConfirmation('删除', '删除该项', () => {
        this.delData.push({id: this.limitSelect.data.id});
        this.delLimitInfo(this.delData);
      });
    } else {
      this.getLimitTree();
      const list = ['id', 'permissionName', 'operateCode', 'parentId', 'description', 'systemId', 'enabled'];
      list.forEach(val => {
        const a = {};
        if (val === 'enabled') {
          this.limitSelect.data[val] = this.limitSelect.data[val] === '启用' ? 1 : 0;
        }
        if (val === 'permissionName') {
          a[val] = this.limitSelect.data.name;
        } else {
          a[val] = this.limitSelect.data[val];
        }
        this.addLimit.patchValue(a);
      });
      this.addLimit.patchValue({name: this.limitSelect.data.systemName});
      this.showEditLimitDialog = true;
    }
  }

  // set table data （设置列表数据）
  public setTableOption(data1): void {
    this.optionTable = {
      width: '100%',
      header: {
        data: [
          {field: 'id', header: '序号'},
          {field: 'permissionName', header: '权限名称'},
          {field: 'operateCode', header: '权限编号'},
          {field: 'parentId', header: '父级id'},
          {field: 'enabled', header: '是否启用'},
          {field: 'systemName', header: '系统名称'},
          {field: 'operating', header: '操作'}
        ],
        style: {background: this.table.tableheader.background, color: this.table.tableheader.color, height: '6vh'}
      },
      Content: {
        data: data1,
        styleone: {background: this.table.tableContent[0].background, color: this.table.tableContent[0].color, textAlign: 'center', height: '3vw'},
      },
      type: 2,
      tableList: [{label: '编辑', color: this.table.detailBtn[0]}, {label: '删除', color: this.table.detailBtn[1]}]
    };
  }

  // search Data (搜索事件)
  public searchDataClick(): void {
    // this.setSrv.queryPermissionInfoById({id: this.searchData}).subscribe(res => {
    //   console.log(res);
    // });
  }

  public getLimitTree(): void {
    this.globalSrv.getLimitTreeData().subscribe(val => {
      this.dataTrees = this.initializeTree(val.data);
    });
  }

  // Paging event (分页事件)
  public clickEvent(e): void {
    this.pageNo = e;
    this.initLimitData();
  }

  public delLimitInfoClick(): void {
    if (this.limitSelect.length === 0) {
      this.toolSrv.setToast('error', '操作错误', '请选择需要删除的项');
    } else {
      this.toolSrv.setConfirmation('删除', `删除这${this.limitSelect.length}项`, () => {
        this.limitSelect.forEach(val => {
          this.delData.push({id: val.id});
        });
        this.delLimitInfo(this.delData);
      });

    }
  }

  // 删除请求
  public delLimitInfo(data): void {
    this.setSrv.delPermissionInfo(data).subscribe(res => {
      this.initLimitData();
      this.resetAllData();
    });
  }

  public showAddLimitClick(): void {
    this.getLimitTree();
    this.showAddLimitDialog = true;

  }

  public resetAllData(): void {
    this.delData = [];
    this.dataTree = null;
    this.limitSelect = [];
  }

  // 添加权限
  public addLimitInfoClick(): void {
    // console.log(this.addLimit.value);
    if (this.addLimit.valid) {
      const data = JSON.parse(JSON.stringify(this.addLimit.value));
      delete data.name;
      delete data.id;
      this.toolSrv.setConfirmation('添加', '添加该权限', () => {
        this.setSrv.addPermissionInfo(data).subscribe(val => {
          this.showAddLimitDialog = false;
          this.resetAllData();
          this.initLimitData();
          this.toolSrv.setToast('success', '请求成功', val.message);
        });
      });
    } else {
      this.toolSrv.setToast('error', '添加失败', '数据未填写完整');
    }
  }

  public UpdateLimitInfoClick(): void {
    console.log(this.addLimit.value);
    if (this.addLimit.valid) {
      const data = JSON.parse(JSON.stringify(this.addLimit.value));
      delete data.name;
      this.toolSrv.setConfirmation('修改', '修改该权限', () => {
        this.setSrv.updatePermissionInfo(data).subscribe(val => {
          this.showEditLimitDialog = false;
          this.resetAllData();
          this.initLimitData();
        });
      });
    } else {
      this.toolSrv.setToast('error', '添加失败', '数据未填写完整');
    }
  }

  // 树结构选择
  public dataTreeSureClick(): void {
    // console.log(this.dataTree);
    this.treeDialog = false;
    this.addLimit.patchValue({name: this.dataTree.label});
    if (this.dataTree.level === 1) {
      this.addLimit.patchValue({systemId: this.dataTree.value});
      this.addLimit.patchValue({parentId: 0});

    } else {
      this.addLimit.patchValue({parentId: this.dataTree.value});
      this.addLimit.patchValue({systemId: this.dataTree.id});
    }
  }

  // Tree structure initialization
  public initializeTree(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode: TreeNode = {};
      if (data[i].hasOwnProperty('permissionTreeInfoList')) {
        childnode.label = data[i].systemName;
        childnode.value = data[i].id;
        childnode.id = data[i].id;
        childnode.level = 1;
      } else {
        childnode.label = data[i].permissionName;
        childnode.value = data[i].id;
        childnode.id = data[i].systemId;
        childnode.level = 2;
      }
      childnode.selectable = true;
      if (data[i].permissionTreeInfoList != null && data[i].permissionTreeInfoList.length !== 0) {
        childnode.children = this.initializeTree(data[i].permissionTreeInfoList);
      } else if (data[i].sysPermissionList != null && data[i].sysPermissionList.length !== 0) {
        childnode.children = this.initializeTree(data[i].sysPermissionList);
      } else {
        childnode.children = [];
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
}
