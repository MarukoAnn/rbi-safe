import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SetingService} from '../../../common/services/seting.service';
import {PublicMethodService} from '../../../common/public/public-method.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../../common/services/global.service';
import {OragizationTree, TreeNode} from '../../../common/model/persion-manger.model';

@Component({
  selector: 'app-limits-manager',
  templateUrl: './limits-manager.component.html',
  styleUrls: ['./limits-manager.component.scss']
})
export class LimitsManagerComponent implements OnInit {
  public optionTable: any;
  public limitSelect = [];
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

  // 权限树相关
  public dataTrees: OragizationTree[];
  public dataTree: OragizationTree = new OragizationTree();
  public treeDialog: boolean;
  constructor(
    private themeSrv: ThemeService,
    private setSrv: SetingService,
    private toolSrv: PublicMethodService,
    private fb: FormBuilder,
    private dataPipe: DatePipe,
    private globalSrv: GlobalService
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
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
      parentId: new FormControl('', Validators.required),
      description: new FormControl(''),
      systemId: new FormControl('', Validators.required),
      enabled: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
    });
    this.initLimitData();
    this.getLimitTree();
  }

  public initLimitData(): void {
    this.setSrv.getPermissionInfoPageData({pageNo: this.pageNo, pageSize: 10}).subscribe(val => {
      // console.log(val);
      if (val.status === '1000'){
        this.limitContent = val.data.contents.map(v => {
            v.enabled  = v.enabled === 1 ? '启用' : '未启用';
            // v.systemId  = v.systemId === 1 ? 'web端' : 'APP端';
            return v;
        });
        this.pageOption = {totalPage: val.data.totalPage, row: val.data.pageNo};
        this.setTableOption(this.limitContent);
        this.toolSrv.setToast('success', '请求成功', val.message);
      }else {
        this.toolSrv.setToast('error', '请求失败', val.message);
      }
    });
  }
  public  selectData(e): void {
    this.limitSelect = e;
  }
  public  DetailClick(e): void {
    if (e.label === '删除'){
      this.toolSrv.setConfirmation('删除', '删除该项', () => {
        this.delData.push({id: e.id});
        this.delLimitInfo(this.delData);
      });
    }
  }
  // set table data （设置列表数据）
  public  setTableOption(data1): void {
    this.optionTable = {
      width: '100%',
      header: {
        data:  [
          {field: 'id', header: '序号'},
          {field: 'permissionName', header: '权限名称'},
          {field: 'operateCode', header: '权限编号'},
          {field: 'parentId', header: '父级id'},
          {field: 'enabled', header: '是否启用'},
          {field: 'systemId', header: '系统名称'},
          {field: 'operating', header: '操作'}
        ],
        style: {background: this.table.tableheader.background, color: this.table.tableheader.color, height: '6vh'}
      },
      Content: {
        data: data1,
        styleone: {background: this.table.tableContent[0].background, color: this.table.tableContent[0].color, textAlign: 'center', height: '3vw'},
      },
      type: 2,
      tableList:  [{label: '编辑', color: this.table.detailBtn[0]}, {label: '删除', color: this.table.detailBtn[1]}]
    };
  }
  // search Data (搜索事件)
  public  searchDataClick(): void {
    console.log(123);
  }
  public  getLimitTree(): void {
    this.globalSrv.getLimitTreeData().subscribe(val => {
      if (val.status === '1000'){
        console.log(val);
        this.toolSrv.setToast('success', '请求成功', val.message);
      }else {
        this.toolSrv.setToast('error', '请求失败', val.message);
      }
    });
  }

  // Paging event (分页事件)
  public  clickEvent(e): void {
    this.pageNo = e.page;
    this.initLimitData();
  }

  public  delLimitInfoClick(): void {
    if (this.limitSelect.length === 0){
      this.toolSrv.setToast('error', '操作错误', '请选择需要删除的项');
    }else {
      this.toolSrv.setConfirmation('删除', `删除这${this.limitSelect.length}项`, () => {
        this.limitSelect.forEach(val => {
          this.delData.push({id: val.id});
        });
        this.delLimitInfo(this.delData);
      });

    }
  }
  // 删除请求
  public  delLimitInfo(data): void {
    this.setSrv.delPersonnelInfo(data).subscribe(res => {
      if (res.status === '1000'){
        // this
        this.initLimitData();
        this.resetAllData();
        this.toolSrv.setToast('success', '删除成功', res.message);
      }else {
        this.toolSrv.setToast('success', '删除成功', res.message);
      }
    });
  }
  public  showAddLimitClick(): void {
    this.showAddLimitDialog = true;
  }

  public  resetAllData(): void {
      this.delData = [];
      this.limitSelect = [];
  }
  // 添加权限
  public  addLimitInfoClick(): void {

  }
  // 树结构选择
  public  dataTreeSureClick(): void {
      console.log(this.dataTree);
  }
  // Tree structure initialization
  public initializeTree(data): any {
    const oneChild = [];
    for (let i = 0; i < data.length; i++) {
      const childnode = new TreeNode();
     if (data[i].hasOwnProperty('permissionTreeInfoList')){
       childnode.label = data[i].systemName;
       childnode.value = data[i].id;
     }else if (data.hasOwnProperty('sysPermissionList')) {
       childnode.label = data[i].permissionName;
       childnode.label = data[i].id;
     }
      childnode.selectable = true;
      if (data[i].chiled != null && data[i].chiled.length !== 0 ) {
        childnode.children = this.initializeTree(data[i].chiled);
      } else {
        childnode.children = [];
      }
      oneChild.push(childnode);
    }
    return oneChild;
  }
}
