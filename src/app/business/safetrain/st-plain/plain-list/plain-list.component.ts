import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../../common/public/theme.service';
import {Router} from '@angular/router';
import {PageOption} from '../../../../common/public/Api';

@Component({
  selector: 'app-plain-list',
  templateUrl: './plain-list.component.html',
  styleUrls: ['./plain-list.component.scss']
})
export class PlainListComponent implements OnInit {
  public plainSelect: any;
  public optionTable: any;
  public optionTable1: any;
  public listPageOption: PageOption = {
    pageSize: 10,
    totalRecord: 50
  };
  public data = [
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    // {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },
    // {id: 1, type: '日常培训', content: '厂规', unit: '矿业公司', subtime: '2020.5.12', time: '2020.5.12' },

  ];
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#FFC06A', '#3B86FF']
  };
  public themeSub: Subscription;
  constructor(
    private themeSrv: ThemeService,
    private router: Router
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
        this.setTableOption(this.data);
        this.setTableOption2(this.data);
      }
    );
  }

  ngOnInit() {
    this.setTableOption(this.data);
    this.setTableOption2(this.data);
  }
  // set table data （设置列表数据）
  public  setTableOption(data1): void {
    this.optionTable = {
      width: '100%',
      header: {
        data:  [
          {field: 'id', header: '序号'},
          {field: 'type', header: '培训类型'},
          {field: 'content', header: '培训内容'},
          {field: 'unit', header: '培训单位'},
          {field: 'subtime', header: '提交时间'},
          {field: 'time', header: '处理时间'},
          {field: 'operating', header: '操作'}
        ],
        style: {background: this.table.tableheader.background, color: this.table.tableheader.color, height: '6vh'}
      },
      Content: {
        data: data1,
        styleone: {background: this.table.tableContent[0].background, color: this.table.tableContent[0].color, textAlign: 'center', height: '3vw'},
      },
      type: 2,
      tableList:  [{label: '编辑', color: this.table.detailBtn[0]}]
    };
  }
  // set table data （设置列表数据）
  public  setTableOption2(data1): void {
    this.optionTable1 = {
      width: '100%',
      header: {
        data:  [
          {field: 'id', header: '序号'},
          {field: 'type', header: '培训类型'},
          {field: 'content', header: '培训内容'},
          {field: 'unit', header: '培训单位'},
          {field: 'subtime', header: '提交时间'},
          {field: 'time', header: '处理时间'},
          {field: 'operating', header: '操作'}
        ],
        style: {background: this.table.tableheader.background, color: this.table.tableheader.color, height: '6vh'}
      },
      Content: {
        data: data1,
        styleone: {background: this.table.tableContent[0].background, color: this.table.tableContent[0].color, textAlign: 'center', height: '3vw'},
      },
      type: 1,
      tableList:  [{label: '编辑', color: this.table.detailBtn[1]}]
    };
  }
  public DetailClick(e): void {
    console.log(e);
    this.router.navigate(['/home/strain/plain/edit'], {queryParams: {id: 1}});
  }
}
