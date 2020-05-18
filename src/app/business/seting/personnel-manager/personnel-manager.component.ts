import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SetingService} from '../../../common/services/seting.service';
import {PublicMethodService} from '../../../common/public/public-method.service';
import {FileOption} from '../../../common/components/basic-dialog/dialog.model';

@Component({
  selector: 'app-personnel-manager',
  templateUrl: './personnel-manager.component.html',
  styleUrls: ['./personnel-manager.component.scss']
})
export class PersonnelManagerComponent implements OnInit {
  public optionTable: any;
  public personnelSelect = [];
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public themeSub: Subscription;
  public pageOption: any;
  public personnelData = [];
  // 赛选
  public searchTypeOption = [
    {label: '全部', value: 0},
    {label: '组织id', value: 1},
    {label: '员工号', value: 2},
    {label: '姓名', value: 3},
    {label: '身份证号', value: 4},
    {label: '岗位', value: 5},
  ];
  public selectType = '';
  // 删除相关
  public delIds = [];
  // 文件上传
  public UploadFileOption: FileOption = new FileOption();
  public needSearchData = '';
  public pageNo = 1;
  public searchData = {
    pageNo: 1,
    pageSize: 10,
    organizationId: '',
    employeeNumber: '',
    name: '',
    idCardNo: '',
    position: '',
  };

  constructor(
    private themeSrv: ThemeService,
    private setSrv: SetingService,
    private toolSrv: PublicMethodService
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
        this.setTableOption(this.personnelData);
      }
    );
  }

  ngOnInit() {
    this.initPersonnelData();
  }

  public  initPersonnelData(): void {
      this.setSrv.getPersonnelPageData(this.searchData).subscribe(val => {
        if (val.status === '1000') {
          this.pageOption = {row: val.data.pageNo, totalPage: val.data.totalPage};
          this.personnelData = val.data.contents;
          this.setTableOption(this.personnelData);
          this.toolSrv.setToast('success', '请求成功', '数据返回成功');
        } else {
          this.toolSrv.setToast('error', '请求失败', val.message);
        }
      });
  }

  public  selectData(e): void {
    this.personnelSelect = e;
    console.log(this.personnelSelect);
  }
  public  DetailClick(e): void {
    if (e.label === '删除') {
      this.selectPersonnelDataToDel();
    }
  }
  // set table data （设置列表数据）
  public  setTableOption(data1): void {
    this.optionTable = {
      width: '100%',
      header: {
        data:  [
          {field: 'id', header: '公司人员ID'},
          {field: 'employeeNumber', header: '员工号'},
          // {field: 'organizationId', header: '组织ID'},
          {field: 'companyName', header: '单位'},
          {field: 'factoryName', header: '厂(矿)'},
          {field: 'workshopName', header: '车间'},
          {field: 'teamName', header: '班组'},
          {field: 'name', header: '姓名'},
          {field: 'gender', header: '性别'},
          {field: 'nation', header: '民族'},
          // {field: 'maritalStatus', header: '婚姻状况'},
          {field: 'idCardNo', header: '身份证号'},
          {field: 'dateOfBirth', header: '出生日期'},
          {field: 'degreeOfEducation', header: '文化程度'},
          {field: 'position', header: '所在岗位'},
          {field: 'jobNature', header: '岗位信息'},
          // {field: 'workType', header: '工种'},
          {field: 'entryTime', header: '入厂时间'},
          // {field: 'remarks', header: '备注'},
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
    this.searchData.pageNo = this.pageNo = 1;
    this.JudgeSeachType(this.selectType);
  }
  // 判断选择类型
  public  JudgeSeachType(data): void {
    this.resetSearchData();
    switch (data) {
       case 1:  this.searchData.organizationId = this.needSearchData; break;
       case 2:  this.searchData.employeeNumber = this.needSearchData; break;
       case 3:  this.searchData.name = this.needSearchData; break;
       case 4:  this.searchData.idCardNo = this.needSearchData; break;
       case 5:  this.searchData.position = this.needSearchData; break;
    }
    this.initPersonnelData();
  }

  // 重置搜索数据
  public  resetSearchData(): void {
     for (const key in this.searchData) {
       if (key !== 'pageSize' && key !== 'pageNo') {
         this.searchData[key] = '';
       }
     }
  }

  // Paging event (分页事件)
  public  clickEvent(e): void {
    console.log(e);
  }
  // 删除信息
  public  selectPersonnelDataToDel(): void {
      if (this.personnelSelect.length === 0) {
        this.toolSrv.setToast('操作错误', 'error', '请选择需要删除的项');
      } else if (this.personnelSelect.length > 0) {
        this.personnelSelect.forEach(val => {
          this.delIds.push(val.id);
        });
        this.toolSrv.setConfirmation('删除', `删除${this.personnelSelect.length}`, () => {
          this.delpersonnelData();
        });
    }
  }
  public  delpersonnelData(): void {
    console.log(this.delIds);
      // this.setSrv.delPersonnelInfo(this.delIds).subscribe(res => {
      //   if (res.status === '1000') {
      //     this.initPersonnelData();
      //     this.resetAllData();
      //   } else {
      //     this.toolSrv.setToast('error', '请求失败', res.message);
      //   }
      // });
  }
  // 重置数据
  public resetAllData(): void{
    this.personnelSelect = [];
    this.delIds = [];
  }

 // 显示上传文件
  public  showUploadFile(): void {
    this.UploadFileOption.width = '800';
    this.UploadFileOption.dialog = true;
    this.UploadFileOption.files = [];
  }

  public  uploadPersoonelFile(e): void {
      if (e.getAll('file').length !== 0) {
        this.setSrv.imoprtPersonnelInfoFile(e).subscribe(val => {
          if (val.status === '1000') {

          } else {
            this.toolSrv.setToast('error', '上传失败', val.message);
          }
        });
      } else {
        this.toolSrv.setToast('error', '上传失败', '请选择需要上传的文件');
      }
  }
}
