import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';

@Component({
  selector: 'app-organization-manager',
  templateUrl: './organization-manager.component.html',
  styleUrls: ['./organization-manager.component.scss']
})
export class OrganizationManagerComponent implements OnInit {
  public optionTable: any;
  public orgazitionSelect: any;
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public pageOption: any;
  public orgazitionContent: any;
  public themeSub: Subscription;
  constructor(
    private themeSrv: ThemeService
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
        this.setTableOption(this.orgazitionContent);
      }
    );
  }

  ngOnInit() {
    // this.setTableOption(this.orgazitionContent);
    this.initOrgazitonInfo();
  }

  initOrgazitonInfo() {

  }
  public  selectData(e): void {
    this.orgazitionSelect = e;
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
          {field: 'type', header: '账号'},
          {field: 'content', header: '单位'},
          {field: 'unit', header: '厂(矿)'},
          {field: 'subtime', header: '车间'},
          {field: 'time', header: '班组'},
          {field: 'name', header: '姓名'},
          {field: 'idnumber', header: '身份证'},
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

  // Paging event (分页事件)
  public  clickEvent(e): void {
    console.log(e);
  }

  public  showAddOrgazitionClick(): void {

  }

  public  delOrgazitionInfoClick(): void {

  }
}
