import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {OragizationTree} from '../../../../common/public/Api';
import {ThemeService} from '../../../../common/public/theme.service';
import {SetingService} from '../../../../common/services/seting.service';
import {PublicMethodService} from '../../../../common/public/public-method.service';
import {DatePipe} from '@angular/common';
import {GlobalService} from '../../../../common/services/global.service';
import {SafetrainService} from '../../../../common/services/safetrain.service';

@Component({
  selector: 'app-scs-question',
  templateUrl: './scs-question.component.html',
  styleUrls: ['./scs-question.component.scss']
})
export class ScsQuestionComponent implements OnInit {
  public optionTable: any;
  public questionSelect = [];
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public themeSub: Subscription;
  public questionContent: any;
  public pageNo = 1;
  public pageOption: any;

  // 删除相关
  public delData = [];
  // 上传文件相关
  public sortQuestionOption: Array<object> = [];
  // public addLimit: FormGroup;
  public showUploadFileDialog: boolean;
  // 修改xiangguan
  public showAddSingleQuestionDialog: boolean;
  // 搜索相关
  public searchData: any;
  public showQuesType = 1;
  // 添加单个条目
  public btnQuestionList: Array<object> = [
    {label: '单选题', active: true, value: 1},
    {label: '多选题', active: false, value: 2},
    {label: '判断题', active: false, value: 3},
    {label: '填空题', active: false, value: 4},
  ];

  // 权限树相关
  public dataTrees: OragizationTree[];
  public dataTree: OragizationTree;
  public treeDialog: boolean;
  constructor(
    private themeSrv: ThemeService,
    private safeSrv: SafetrainService,
    private toolSrv: PublicMethodService,
    // private fb: FormBuilder,
    // private dataPipe: DatePipe,
    private globalSrv: GlobalService
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
        this.setTableOption(this.questionContent);
      }
    );
  }


  ngOnInit() {
    // this.addLimit = this.fb.group({
    //   permissionName: new FormControl('', Validators.required),
    //   operateCode: new FormControl('', Validators.required),
    //   systemId: new FormControl('', Validators.required),
    //   enabled: new FormControl('', Validators.required),
    //   description: new FormControl(''),
    //   parentId: new FormControl(''),
    //   name: new FormControl(''),
    //   id: new FormControl(''),
    // });
    this.initLimitData();
    this.getQuestionSortInfoConfig();
  }
  public getQuestionSortInfoConfig(): void {
    this.safeSrv.searchScsQuestionSortInfo().subscribe(val => {
      val.data.forEach(res => {
        this.sortQuestionOption.push({label: res.subjectStoreName, value: res.id});
      });
    });
  }


  public initLimitData(): void {
    // this.setSrv.getPermissionInfoPageData({pageNo: this.pageNo, pageSize: 10}).subscribe(val => {
    //   this.questionContent = val.data.contents.map(v => {
    //     v.enabled  = v.enabled === 1 ? '启用' : '未启用';
    //     return v;
    //   });
    //   this.pageOption = {totalRecord: val.data.totalRecord, pageSize: val.data.pageSize};
    //   // this.pageOption = {pageSize: ''};
    //   this.setTableOption(this.questionContent);
    // });
  }
  public  selectData(e): void {
    this.questionSelect = e;
  }
  public  DetailClick(e): void {
    if (e.label === '删除'){
      this.toolSrv.setConfirmation('删除', '删除该项', () => {
        this.delData.push({id: e.id});
        this.delLimitInfo(this.delData);
      });
    }else {
      const list = ['id', 'permissionName', 'operateCode', 'parentId', 'description', 'systemId', 'enabled'];
      list.forEach(val => {
        const a = {};
        if (val === 'enabled'){
          e.data[val] = e.data[val] === '启用' ? 1 : 0;
        }
        a[val] = e.data[val];
        // this.addLimit.patchValue(a);
      });
      // this.addLimit.patchValue({name: e.data.systemName});
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
      tableList:  [{label: '查看', color: this.table.detailBtn[0]}, {label: '删除', color: this.table.detailBtn[1]}]
    };
  }
  // search Data (搜索事件)
  public  searchDataClick(): void {
    // this.setSrv.queryPermissionInfoById({id: this.searchData}).subscribe(res => {
    //   console.log(res);
    // });
  }
  // 试题点击
  public  questionClick(item): void {
    this.showQuesType = item.value;
    this.btnQuestionList.forEach(val => {
      // @ts-ignore
      val.active = false;
    });
    item.active = true;
  }
  // Paging event (分页事件)
  public  clickEvent(e): void {
    this.pageNo = e;
    this.initLimitData();
  }
  public  radioEvent(e): void {
      console.log(e);
  }
  // 删除请求
  public  delLimitInfo(data): void {
    // this.setSrv.delPermissionInfo(data).subscribe(res => {
    //   this.initLimitData();
    //   this.resetAllData();
    // });
  }
  public  showUploadFileClick(): void {
    this.showUploadFileDialog = true;
  }

  public  resetAllData(): void {
    this.delData = [];
    this.dataTree = null;
    this.questionSelect = [];
  }
  // 添加权限
  public  addLimitInfoClick(): void {
    // if (this.addLimit.valid){
    //   const data = JSON.parse(JSON.stringify(this.addLimit.value));
    //   delete data.name;
    //   delete data.id;
    //   this.toolSrv.setConfirmation('添加', '添加该权限', () => {
    //     this.setSrv.addPermissionInfo(data).subscribe(val => {
    //       this.showAddLimitDialog = false;
    //       this.resetAllData();
    //       this.initLimitData();
    //     });
    //   });
    // }else {
    //   this.toolSrv.setToast('error', '添加失败', '数据未填写完整');
    // }
  }
  public  UpdateLimitInfoClick(): void {
    // // console.log(this.addLimit.value);
    // if (this.addLimit.valid){
    //   const data = JSON.parse(JSON.stringify(this.addLimit.value));
    //   delete data.name;
    //   this.toolSrv.setConfirmation('修改', '修改该权限', () => {
    //     this.setSrv.updatePermissionInfo(data).subscribe(val => {
    //       this.showEditLimitDialog = false;
    //       this.resetAllData();
    //       this.initLimitData();
    //     });
    //   });
    // }else {
    //   this.toolSrv.setToast('error', '添加失败', '数据未填写完整');
    // }
  }
  // 树结构选择
  public  dataTreeSureClick(): void {
    // console.log(this.dataTree);
    this.treeDialog = false;
    // this.addLimit.patchValue({name: this.dataTree.label});
    // if (this.dataTree.level === 1){
    //   this.addLimit.patchValue({systemId: this.dataTree.value});
    //   this.addLimit.patchValue({parentId: ''});
    //
    // }else {
    //   this.addLimit.patchValue({parentId: this.dataTree.value});
    //   this.addLimit.patchValue({systemId: this.dataTree.id});
    // }
  }

  public  selectFile(e): void {

  }

}
