import {Component, OnInit, ViewChild} from '@angular/core';
import {Es} from '../../../../common/public/contents';
import {UploadImageComponent} from '../../../../common/components/upload-image/upload-image.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-shoot-report',
  templateUrl: './shoot-report.component.html',
  styleUrls: ['./shoot-report.component.scss']
})
export class ShootReportComponent implements OnInit {

  // @ts-ignore
  @ViewChild('upimg') ImageClear: UploadImageComponent;
  public ImageOption = {
    files: [],
    showUploadIcon: true
  };
  public isHandle = false;
  // @ts-ignore
  public imageFiles: any[] = []; // 图片列表
  // public fileList: any[] = []; // 文件列表
  public filename: any;
  public filename1: any;
  // 上报
  public addReport: FormGroup;
  constructor(
    private fb: FormBuilder,
  ) { }
  public esDate: any;

  ngOnInit() {
    this.esDate = Es;
    this.addReport = this.fb.group({
      troubleshootingTime: new FormControl('', Validators.required),
      hidDangerContent: new FormControl('', Validators.required),
      hidDangerGrade: new FormControl('', Validators.required),
      ifRectificationPlan: new FormControl('', Validators.required),
      ifDeal: new FormControl('', Validators.required),
      governanceFunds: new FormControl('', Validators.required),
      completionTime: new FormControl('', Validators.required),
      completionSituation: new FormControl('', Validators.required),
      organizationId: new FormControl('', Validators.required),
      organizationName: new FormControl('', Validators.required),
      plan: new FormControl('', Validators.required),
      report: new FormControl('', Validators.required),
      beforeImg: new FormControl('', Validators.required),
      afterImg: new FormControl('', Validators.required),
      hidTypeThing: new FormControl('', Validators.required),
      hidTypePerson: new FormControl('', Validators.required),
      hidTypeManage: new FormControl('', Validators.required),
    });
    // console.log(this.esDate);
  }

  public  selectFile(e): void {
     this.imageFiles = e;
     console.log(this.imageFiles);
  }

  public submitClcik(): void {
    this.ImageClear.clearImage();
  }

  public  SelectFile(e, name): void {
    if (name === 'filename'){
      console.log(e.target.files[0].name);
      this.filename = e.target.files[0].name;
    }else {
      console.log(e.target.files[0].name);
      this.filename1 = e.target.files[0].name;
    }
  }

  public  selectHandleType(e): void {
    console.log(e);
    this.isHandle = e === 1;
  }
}
