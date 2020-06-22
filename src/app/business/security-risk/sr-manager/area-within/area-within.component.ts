import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Es, initializeTree, setDrapdownOptionList, setImageToFromData} from '../../../../common/public/contents';
import {GlobalService} from '../../../../common/services/global.service';
import {SecurityRiskService} from '../../../../common/services/security-risk.service';
import {PublicMethodService} from '../../../../common/public/public-method.service';
import {UploadImageComponent} from '../../../../common/components/upload-image/upload-image.component';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-area-within',
  templateUrl: './area-within.component.html',
  styleUrls: ['./area-within.component.scss']
})
export class AreaWithinComponent implements OnInit {
  // @ts-ignore
  @ViewChild('upimg') ImageClear: UploadImageComponent;
  public addWithinRisk: FormGroup;
  public treeDialog: any;
  public OrgTrees: any;
  public OrgTree: any;
  public esDate: any = Es;
  public riskKindOption: Array<object> = [];
  public riskCategoryOption: Array<object> = [];
  public ImageOption = {
    files: [],
    showUploadIcon: true
  };
  constructor(
    private fb: FormBuilder,
    private globalSrv: GlobalService,
    private secRiskSrv: SecurityRiskService,
    private toolSrv: PublicMethodService,
    private datePipe: DatePipe,
  ) { }

  ngOnInit() {
    this.addWithinRisk = this.fb.group({
      organizationName: new FormControl('', Validators.required),
      organizationId: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
      taskCode: new FormControl('', Validators.required), // 作业或者任务
      workType: new FormControl('', Validators.required), // 工种
      step: new FormControl('', Validators.required), // 步骤
      harmName: new FormControl('', Validators.required), // 危害名称
      harmKind: new FormControl('', Validators.required), // 危害种类
      harmDescription: new FormControl('', Validators.required), // 危害及相关描述
      riskDescription: new FormControl('', Validators.required), // 风险描述
      riskKind: new FormControl('', Validators.required), // 风险种类
      riskCategory: new FormControl('', Validators.required), // 粉线范畴
      exposeInfo: new FormControl('', Validators.required), // 风险暴露人员  设备信息
      controlMeasures: new FormControl('', Validators.required), // 	现有控制措施
      consequence: new FormControl('', Validators.required), // 后果
      expose: new FormControl('', Validators.required), // 暴露
      possibility: new FormControl('', Validators.required), // 可能性
      riskValue: new FormControl('', Validators.required), // 风险值
      riskGrad: new FormControl('', Validators.required), // 风险等级
      adviceMeasures: new FormControl('', Validators.required), // 建议采取措施
      measuresEffective: new FormControl('', Validators.required), // 控制措施的有效性
      measuresCost: new FormControl('', Validators.required), // 措施成本
      measuresResult: new FormControl('', Validators.required), // 控制措施判断结果
      measuresUse: new FormControl('', Validators.required), // 措施的采纳 选择（单选） 是 否
      evaluateTime: new FormControl('', Validators.required), // 评估时间
      picture: new FormControl('', Validators.required), // 图片文件 最大六张
    });
    this.initRiskAreaWidtinData();
  }
  // 初始化下拉框信息
  public  initRiskAreaWidtinData(): void {
    this.getOrgTreeData();
    this.globalSrv.getHidConfigData({data: [{settingType: 'RISK_CATEGOTY'}, {settingType: 'HARM_KIND'}]}).subscribe(val => {
      this.riskKindOption = setDrapdownOptionList(val.data.HARM_KIND);
      this.riskCategoryOption = setDrapdownOptionList(val.data.RISK_CATEGOTY);
    });
  }
  // 获取树结构数据
  public getOrgTreeData(): void {
    this.globalSrv.getOrgazitionTreeData({}).subscribe(value => {
      this.OrgTrees = initializeTree(
        value.data ? value.data : [],
        {labelName: 'organizationName', childrenName: 'chiled'}
      );
    });
  }
  public selectImageFile(e): void {
    this.addWithinRisk.patchValue({picture: e});
    // console.log(e);
  }

  public  submitClcik(): void {
    if (this.addWithinRisk.valid){
      if (this.addWithinRisk.value.picture.length <= 6){
        this.toolSrv.setConfirmation('提交', '提交', () => {
          const formData = new FormData();
          setImageToFromData(this.addWithinRisk, 'picture', formData);
          const subData = JSON.parse(JSON.stringify(this.addWithinRisk.value));
          this.datePipe.transform(subData.evaluateTime, 'yyyy-MM-dd');
          for (const key in subData){
            if (key !== 'picture'){
              formData.append(key, subData[key]);
            }
          }
          this.secRiskSrv.addWithInAreaRisk(formData).subscribe(res => {
            this.addWithinRisk.reset();
            this.ImageClear.clearImage();
            // this.
          });
        });
      }else {
        this.toolSrv.setToast('error', '添加错误', '图片最多添加6张上传');
      }
    }else {
      this.toolSrv.setToast('error', '操作错误', '数据未填写完整');
    }
  }
  public  dataTreeSureClick(): void {
    this.treeDialog = false;
    this.addWithinRisk.patchValue({'organizationName': this.OrgTree.label});
    this.addWithinRisk.patchValue({'organizationId': this.OrgTree.id});
  }
  // 计算风险值
  public  calcRiskValue(): void {
    if (this.addWithinRisk.value.possibility !== '' && this.addWithinRisk.value.consequence !== '' && this.addWithinRisk.value.expose !== ''){
      this.secRiskSrv.calcRiskValue({consequence: this.addWithinRisk.value.consequence, expose: this.addWithinRisk.value.expose, possibility: this.addWithinRisk.value.possibility}).subscribe(val => {
        this.addWithinRisk.patchValue({riskValue: val.data.riskValue});
        this.addWithinRisk.patchValue({riskGrad: val.data.riskGrad});
      });
    }
  }
 // 计算措施判断结果
  public calcMeasuresResult(): void {
    if (this.addWithinRisk.value.riskValue !== '' && this.addWithinRisk.value.measuresCost !== '' && this.addWithinRisk.value.measuresEffective !== ''){
      this.secRiskSrv.calcRiskMeasuresResult({riskValue: this.addWithinRisk.value.riskValue, measuresCost: this.addWithinRisk.value.measuresCost, measuresEffective: this.addWithinRisk.value.measuresEffective}).subscribe(val => {
        this.addWithinRisk.patchValue({measuresResult: val.data.measuresResult});
      });
    }
  }
}
