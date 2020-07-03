import {Component, OnInit, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Es, setImageToFromData} from '../../../common/public/contents';
import {BigRiskService} from '../../../common/services/big-risk.service';
import {PublicMethodService} from '../../../common/public/public-method.service';
import {DatePipe} from '@angular/common';
import {UploadImageComponent} from '../../../common/components/upload-image/upload-image.component';

@Component({
  selector: 'app-rk-discern',
  templateUrl: './rk-discern.component.html',
  styleUrls: ['./rk-discern.component.scss']
})
export class RkDiscernComponent implements OnInit {
  // @ts-ignore
  @ViewChild('upimg') ImageClear: UploadImageComponent;
  public addDiscern: FormGroup;
  public ImageOption = {
    files: [],
    showUploadIcon: true,
    imgUrls: []
  };
  // public imageList: any[] =[];
  public esDate = Es;
  constructor(
    private fb: FormBuilder,
    private discernSrv: BigRiskService,
    private toolSrv: PublicMethodService,
    private datePipe: DatePipe
  ) { }

  ngOnInit() {
    this.addDiscern = this.fb.group({
      seriousDangerName: new FormControl('',  Validators.required),
      seriousDangerLocation: new FormControl('', Validators.required),
      seriousDangerElement: new FormControl('', Validators.required),
      seriousDangerMeasure: new FormControl('', Validators.required),
      seriousDangerStatus: new FormControl('', Validators.required),
      seriousDangerCycle: new FormControl('', Validators.required),
      seriousDangerPrincipal: new FormControl('', Validators.required),
      seriousDangerTime: new FormControl('', Validators.required),
      seriousDangerPicture: new FormControl(''),
      seriousDangerEmergencyMeasure: new FormControl('', Validators.required),
      seriousDangerControlLevel: new FormControl('', Validators.required),
    });
  }

  // 选择图片
  public  selectImageFile(e): void {
    this.addDiscern.patchValue({seriousDangerPicture: e.value.files});
  }
  // 提交
  public  submitClcik(): void {
    if (this.addDiscern.valid){
      const formData = new FormData();
      const subData = JSON.parse(JSON.stringify(this.addDiscern.value));
      subData.seriousDangerTime = this.datePipe.transform(subData.seriousDangerTime, 'yyyy-MM-dd');
      setImageToFromData(this.addDiscern, 'seriousDangerPicture', formData);
      for (const key in subData){
        if (key !== 'seriousDangerPicture'){
          formData.append(key, subData[key]);
        }
      }
      this.toolSrv.setConfirmation('提交', '提交', () => {
        this.discernSrv.addRiskDiscernData(formData).subscribe(val => {
          this.addDiscern.reset();
          this.ImageClear.clearImage();
        });
      });
    }else {
      this.toolSrv.setToast('error', '操作错误', '数据未填写完整');
    }
  }
}
