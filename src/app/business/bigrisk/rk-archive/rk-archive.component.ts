import {Component, OnInit, ViewChild} from '@angular/core';
import {PublicMethodService} from '../../../common/public/public-method.service';
import {BigRiskService} from '../../../common/services/big-risk.service';
import {PageOption} from '../../../common/public/Api';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Es, setImageToFromData} from '../../../common/public/contents';
import {UploadImageComponent} from '../../../common/components/upload-image/upload-image.component';

@Component({
  selector: 'app-rk-archive',
  templateUrl: './rk-archive.component.html',
  styleUrls: ['./rk-archive.component.scss']
})
export class RkArchiveComponent implements OnInit {
  // @ts-ignore
  @ViewChild('upimg') ImageClear: UploadImageComponent;
  public table = {
    tableheader: {background: '#F5F6FA', color: '#C3C3C5'},
    tableContent: [
      {background: '#FFFFFF', color: '#9899A0'}],
    detailBtn: ['#3B86FF', '#FF8A9A']
  };
  public ImageOption = {
    files: [],
    imgUrls: [],
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
  public delids: any = [];
  public imgFilePath: any = [];
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
        seriousDangerPicture: new FormControl(''),
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
    console.log(e);
    if (e.type === 'add'){
      this.editArchive.patchValue({seriousDangerPicture: e.value.files});
    }else {
      let imgid = '';
      if (this.imgFilePath.length !== 0){
        this.imgFilePath.forEach((val, index) => {
          if (e.value.imgUrls.length !== 0){
            if (e.value.imgUrls.includes(val.seriousDangerPicturePath)){
              imgid = val.id;
              this.imgFilePath.splice(index, 1);
            }
          }else {
            imgid = this.imgFilePath[0].id;
            this.imgFilePath = [];
          }
        });
        this.delids.push(imgid);
        // console.log(imgid);
      }
    }
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
    this.showEditArchiveDialog = true;
    for (const key in  JSON.parse(JSON.stringify(this.editArchive.value))){
      const a = {};
      a[key] = data[key];
      this.editArchive.patchValue(a);
    }
    const filePathlist = [];
    data.seriousDangerPictureList.forEach(res => {
      filePathlist.push(res.seriousDangerPicturePath);
    });
    this.imgFilePath = data.seriousDangerPictureList;
    this.ImageOption = {
      files: [],
      imgUrls: filePathlist,
      showUploadIcon: true
    };
  }
 // 确定修改
 public  sureEditArchiveClick(): void {
    // if (this.editArchive.value.)
     console.log(this.editArchive.value);
     if (this.editArchive.valid){
       this.toolSrv.setConfirmation('修改', '修改', () => {
         const data = JSON.parse(JSON.stringify(this.editArchive.value));
         const formData = new FormData();
         if (data.seriousDangerPicture !== '' && data.seriousDangerPicture !== undefined){
           setImageToFromData(this.editArchive, 'seriousDangerPicture', formData);
         }
         for (const key in data){
           formData.append(key, data[key]);
         }
         if (this.delids.length !== 0){
           this.delids.forEach(v => {
             formData.append('pictureId', v);
           });
         }else {
           formData.append('pictureId', '');
         }
         this.archiveSrv.updateRiskArchivesData(formData).subscribe(val => {
           this.resetData();
           this.initRkArchiveData();
         });
       });
     }else {
       this.toolSrv.setToast('error', '操作错误', '数据未填写完整');
     }
 }
 public  resetData(): void {
     this.delids = [];
     this.imgFilePath = [];
     this.editArchive.reset();
     this.showEditArchiveDialog = false;
     this.ImageClear.clearImage();
 }
}
