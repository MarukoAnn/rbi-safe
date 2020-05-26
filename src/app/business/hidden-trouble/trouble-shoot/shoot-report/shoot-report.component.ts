import {Component, OnInit, ViewChild} from '@angular/core';
import {Es, initializeTree, setDrapdownOptionList} from '../../../../common/public/contents';
import {UploadImageComponent} from '../../../../common/components/upload-image/upload-image.component';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {GlobalService} from '../../../../common/services/global.service';
import {PublicMethodService} from '../../../../common/public/public-method.service';

@Component({
  selector: 'app-shoot-report',
  templateUrl: './shoot-report.component.html',
  styleUrls: ['./shoot-report.component.scss']
})
export class ShootReportComponent implements OnInit {

  // @ts-ignore
  @ViewChild('upimg') ImageClear: UploadImageComponent;
  public esDate: any = Es;
  public ImageOption = {
    files: [],
    showUploadIcon: true
  };
  public hidFradeOption: any[] = [];
  public isHandle: boolean = false;
  // @ts-ignore
  public imageFiles: any[] = []; // 图片列表
  // public fileList: any[] = []; // 文件列表
  public filename: any;
  public filename1: any;
  public OrgTrees: any;
  public OrgTree: any;
  public treeDialog: boolean;
  // 上报
  public addReport: FormGroup;
  constructor(
    private fb: FormBuilder,
    private globalSrv: GlobalService,
    private toolSrv: PublicMethodService
  ) { }


  ngOnInit() {
    this.addReport = this.fb.group({
      troubleshootingTime: new FormControl('', Validators.required), // 排查时间
      ifControlMeasures: new FormControl('无', Validators.required), // 控制措施
      hidDangerContent: new FormControl('', Validators.required), // 隐患内容
      hidDangerGrade: new FormControl('', Validators.required), // 	隐患等级
      ifRectificationPlan: new FormControl('无', Validators.required), // 整改方案
      ifDeal: new FormControl('否', Validators.required), // 是否处理
      organizationId: new FormControl('', Validators.required),
      organizationName: new FormControl('', Validators.required),
      beforeImg: new FormControl('', Validators.required), // 排查前图片
      hidType: new FormControl('', Validators.required),
      // hidTypeThing: new FormControl('', Validators.required), // 隐患类型
      // hidTypePerson: new FormControl('', Validators.required), // 隐患类型
      // hidTypeManage: new FormControl('', Validators.required), // 隐患类型

      // 处理的
      governanceFunds: new FormControl(''), // 处理资金
      completionTime: new FormControl(''), // 完成时间
      completionSituation: new FormControl(''), // 完成情况
      afterImg: new FormControl(''), // 排查后图片
      plan: new FormControl(''), // 整改方案
      report: new FormControl(''), // 验收报告
    });
    // console.log(this.esDate);
    this.initShootReportData();
  }

  public  initShootReportData(): void {
    this.getOrgTreeData();
    this.globalSrv.getHidConfigData({data: [{settingType: 'HID_GRADE'}, {settingType: 'HID_GRAE'}]}).subscribe(val => {
        this.hidFradeOption = setDrapdownOptionList(val.data.HID_GRADE);
        // this.hidFradeOption = this.toolSrv.setDrapdownOptionList(val.HID_GRADE);
      });
  }
  public getOrgTreeData(): void {
      this.globalSrv.getOrgazitionTreeData({}).subscribe(value => {
        this.OrgTrees = initializeTree(
          value.data ? value.data : [],
          {labelName: 'organizationName', childrenName: 'chiled'}
        );
      });
  }
  public  selectFile(e, data): void {
     this.imageFiles = e;
     // this.addReport.patchValue({data: this.imageFiles});
     // this.addReport.patchValue({afterImg: this.imageFiles});
     // this
     // this.beforeImg
  }

  public submitClcik(): void {
    // c
    const subMitDta = JSON.parse(JSON.stringify(this.addReport.value));
    console.log(subMitDta);
    this.ImageClear.clearImage();
  }

  public  SelectFile(e, name): void {
    if (name === 'filename'){
      this.filename = e.target.files[0].name;
    }else {
      this.filename1 = e.target.files[0].name;
    }
  }

  public  selectHandleType(e): void {
    this.isHandle = e === 1;
    if ( e === 1){
      this.addReport.setControl(
        'governanceFunds', new FormControl('', Validators.required));
      this.addReport.setControl(
        'completionTime', new FormControl('', Validators.required));
      this.addReport.setControl(
        'completionSituation', new FormControl('', Validators.required));
      this.addReport.setControl(
        'afterImg', new FormControl('', Validators.required));
      this.addReport.setControl(
        'plan', new FormControl('', Validators.required));
      this.addReport.setControl(
        'report', new FormControl('', Validators.required));
    }
  }

  public dataTreeSureClick(): void {
    // console.log(this.OrgTree);
    this.treeDialog = false;
    // this.addReport.registerControl()
    this.addReport.patchValue({'organizationName': this.OrgTree.label});
    this.addReport.patchValue({'organizationId': this.OrgTree.id});
  }
}
