import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SetingService} from '../../../common/services/seting.service';
import {Role} from '../../../common/public/Api';

@Component({
  selector: 'app-roles-manager',
  templateUrl: './roles-manager.component.html',
  styleUrls: ['./roles-manager.component.scss']
})
export class RolesManagerComponent implements OnInit {
  public optionTable: any;
  public roleSelect: any;
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public themeSub: Subscription;
  public roleTableHeader: any[] = [
    { field: 'roleName', header: '角色名称' },
    { field: 'whetherSee', header: '是否可见下级' },
    { field: 'enabled', header: '是否启用'},
  ];
  public roleTableData: Role[] = [];
  public roleSelectedData: Role = {};
  public rolePageOption = {
    pageSize: 10,
    totalRecord: 50
  };
  constructor(
    private themeSrv: ThemeService,
    private setSrv: SetingService
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
      }
    );
  }


  ngOnInit() {
    this.setSrv.getRoleInfoPageData({pageNo: 1, pageSize: 100}).subscribe((res) => {
      console.log(res);
      this.roleTableData = res.data.contents;
      console.log(this.roleTableData);
    });
  }

  public  selectData(e): void {
    this.roleSelect = e;
  }
  public  DetailClick(e): void {
    console.log(e);
  }
  // set table data （设置列表数据）
  public  setTableOption(data1): void {
    this.optionTable = {
      width: '100%',
      header: {
        data:  [
          {field: 'id', header: '序号'},
          {field: 'roleName', header: '角色名称'},
          {field: 'whetherSee', header: '下级是否可见'},
          {field: 'enabled', header: '是否启用'},
          {field: 'operating', header: '操作'}
        ],
        style: {background: this.table.tableheader.background, color: this.table.tableheader.color, height: '6vh'}
      },
      Content: {
        data: data1,
        styleone: {background: this.table.tableContent[0].background, color: this.table.tableContent[0].color, textAlign: 'center', height: '3vw'},
      },
      type: 2,
      tableList:  [
        {label: '编辑', color: this.table.detailBtn[0]},
        {label: '删除', color: this.table.detailBtn[1]},
        {label: '查看权限', color: this.table.detailBtn[2]},
        ]
    };
  }
  // search Data (搜索事件)
  public  searchDataClick(): void {
    console.log(123);
  }
  // Paging event (分页事件)
  public  clickEvent(e): void {
    console.log(e);
  }
  // test
  public test(data): any {
    return JSON.stringify(data);
  }
}
