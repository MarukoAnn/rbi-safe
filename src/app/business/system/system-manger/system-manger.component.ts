import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../common/public/theme.service';
import {SystemService} from '../../../common/services/system.service';
import {PageOption} from '../../../common/public/Api';
import {FormControl, FormGroup} from '@angular/forms';
import {PublicMethodService} from '../../../common/public/public-method.service';

@Component({
  selector: 'app-system-manger',
  templateUrl: './system-manger.component.html',
  styleUrls: ['./system-manger.component.scss']
})
export class SystemMangerComponent implements OnInit {

  public optionTable: any;
  public roleSelect: any;
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#FF8A9A']
  };
  public systemContent = [];
  public pageNo = 1;
  public themeSub: Subscription;
  // 添加相关
  public showAddSystemDialog: boolean;
  public addSystem: FormGroup;
  constructor(
    private themeSrv: ThemeService,
    private systemSrv: SystemService,
    private toolSrv: PublicMethodService
  ) {
    this.themeSub =  this.themeSrv.changeEmitted$.subscribe(
      value => {
        this.table.tableheader = value.table.header;
        this.table.tableContent = value.table.content;
        this.table.detailBtn = value.table.detailBtn;
        this.setTableOption(this.systemContent);
      }
    );
  }
  public pageOption: PageOption;

  ngOnInit() {
      this.initSystemData();
  }

  public  initSystemData(): void {
     this.systemSrv.getSystemPageData({pageNo: this.pageNo, pageSize: 10}).subscribe( val => {
       if (val.status === '1000'){
         this.systemContent = val.data.contents;
         this.setTableOption(this.systemContent);
         this.pageOption = {pageSize: val.data.pageSize, totalRecord: val.data.totalRecord};
         this.toolSrv.setToast('success', '请求成功', val.message);
       }else {
         this.toolSrv.setToast('error', '请求失败', val.message);
       }
     });
  }
  public  selectData(e): void {
    this.roleSelect = e;
  }
  public  DetailClick(e): void {
    if (e.label === '删除'){
      this.toolSrv.setToast('error', '操作错误', '此功能待开发');
    }
  }
  // set table data （设置列表数据）
  public  setTableOption(data1): void {
    this.optionTable = {
      width: '100%',
      header: {
        data:  [
          {field: 'id', header: '文件编号'},
          {field: 'fileName', header: '文件名称'},
          {field: 'filePath', header: '文件下载路径'},
          {field: 'categoryName', header: '文件类型名称'},
          {field: 'operating', header: '操作'}
        ],
        style: {background: this.table.tableheader.background, color: this.table.tableheader.color, height: '6vh'}
      },
      Content: {
        data: data1,
        styleone: {background: this.table.tableContent[0].background, color: this.table.tableContent[0].color, textAlign: 'center', height: '3vw'},
      },
      type: 2,
      tableList:  [{label: '删除', color: this.table.detailBtn[0]}]
    };
  }
  // search Data (搜索事件)
  public  searchDataClick(): void {
    console.log(123);
  }
  // Paging event (分页事件)
  public  clickEvent(e): void {
    this.pageNo = e;
    this.initSystemData();
  }
  // 重置数据
  public  resetAllData(): void {
      this.addSystem.reset();
  }

  public  addSystemInfoClick(): void {
      if (this.addSystem.valid){
        console.log(123);
      }else {
        this.toolSrv.setToast('error', '操作错误', '数据为填写完整');
      }
  }

}
