import { Component, OnInit } from '@angular/core';
import {PublicMethodService} from '../../../common/public/public-method.service';
import {BigRiskService} from '../../../common/services/big-risk.service';
import {PageOption} from '../../../common/public/Api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Es} from '../../../common/public/contents';

@Component({
  selector: 'app-rk-archive',
  templateUrl: './rk-archive.component.html',
  styleUrls: ['./rk-archive.component.scss']
})
export class RkArchiveComponent implements OnInit {
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public ImageOption = {
    files: [],
    showUploadIcon: true
  };
  public seriousDangerName: string = '';  // 重大危险源名称
  public filePathList: Array<any> = [];
  public showEditArchiveDialog: boolean = false;
  public rkArchiveTitle: Array<object>  = [
    // { field: 'id', header: '序号' },
    { field: 'seriousDangerName', header: '重大危险源名称' },
    { field: 'seriousDangerLocation', header: '重大危险源所在位置' },
    { field: 'seriousDangerElement', header: '危险因素' },
    { field: 'seriousDangerMeasure', header: '危险源主要控制措施' },
    { field: 'seriousDangerStatus', header: '危险源管控状态' },
    { field: 'seriousDangerCycle', header: '危险源管控周期' },
    { field: 'seriousDangerPrincipal', header: '危险源主要负责人' },
    { field: 'seriousDangerTime', header: '危险源最近管控时间' },
    { field: 'operating', header: '操作' },
  ];
  public rkArchiveContent: Array<object> = [];
  public archivePageNo: number = 1;
  public editArchive: FormGroup;
  public principalPageOption: PageOption = {
    pageSize: 10,
    totalRecord: ''
  };
  public esDate = Es;
  constructor(
    private toolSrv: PublicMethodService,
    private archiveSrv: BigRiskService,
    private fb: FormBuilder
  ) { }
  ngOnInit() {
    this.initRkArchiveData();
    this.editArchive = this.fb.group(
      {
        id: new FormControl('', Validators.required),
        seriousDangerName: new FormControl('', Validators.required),
        seriousDangerLocation: new FormControl('', Validators.required),
        seriousDangerElement: new FormControl(''),
        seriousDangerMeasure: new FormControl('', Validators.required),
        seriousDangerStatus: new FormControl('', Validators.required),
        seriousDangerCycle: new FormControl('', Validators.required),
        seriousDangerPrincipal: new FormControl('', Validators.required),
        seriousDangerTime: new FormControl('', Validators.required),
        seriousDangerPicture: new FormControl('', Validators.required),
      }
    );
  }

  // 初始化分页数据
  public  initRkArchiveData(): void {
    this.archiveSrv.getRiskArchivesPageData({pageNo: this.archivePageNo, pageSize: 10}).subscribe(val => {
      console.log(val);
      this.rkArchiveContent = val.data.contents;
      this.principalPageOption.totalRecord = val.data.totalRecord;
    });

  }
  public  selectImageFile(e): void {

  }
  // 条件搜索
  public  searchDataClick(): void {
    if (this.seriousDangerName !== ''){
       this.archiveSrv.searchRiskArchivesDataByName({seriousDangerName: this.seriousDangerName, pageNo: this.archivePageNo, pageSize: 10}).subscribe(val => {
         this.rkArchiveContent = val.data.contents;
         this.principalPageOption.totalRecord = val.data.totalRecord;
       });
    }else {
      // this.initRkArchiveData();
      this.toolSrv.setToast('error', '操作错误', '请输入重大危险源的名称');
    }
  }
 // 导入文件
  public  importArchiveFileClick(): void {

  }
  // 导出文件
  public  exportArchiveFileClick(): void {

  }

  // 分页点击事件
  public  archivePageEvent(e): void {
      console.log(e);
      this.archivePageNo = e;
      this.initRkArchiveData();
  }
  // 显示修改重大危险源档案
  public  editRiskArchiveClcik(data): void {
    console.log(data);
    this.archiveSrv.searchRiskArchivesInfoById({id: data.id}).subscribe(val => {
      console.log(val);
      this.showEditArchiveDialog = true;
      const List = ['seriousDangerName', 'seriousDangerLocation', 'seriousDangerElement', 'id',
        'seriousDangerMeasure', 'seriousDangerCycle', 'seriousDangerPrincipal', 'seriousDangerTime'];
      const a = {};
      List.forEach(v => {
        a[v] = val.data.seriousDanger[v];
        this.editArchive.patchValue(a);
      });
      const filePathlist = [];
      val.data.seriousDangerPictureList.forEach(res => {
        filePathlist.push(res.seriousDangerPicturePath);
      });
      this.ImageOption = {
        files: filePathlist,
        showUploadIcon: true
      };
    });
  }
 // 确定修改
 public  sureEditArchiveClick(): void {

 }
}
