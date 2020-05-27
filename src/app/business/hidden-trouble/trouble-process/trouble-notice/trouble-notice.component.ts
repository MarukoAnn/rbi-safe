import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {TroubleProcessService} from '../../../../common/services/trouble-process.service';
import {GlobalService} from '../../../../common/services/global.service';
import {DatePipe} from '@angular/common';
import {PublicMethodService} from '../../../../common/public/public-method.service';
import {Es, setDrapdownOptionList} from '../../../../common/public/contents';

@Component({
  selector: 'app-trouble-notice',
  templateUrl: './trouble-notice.component.html',
  styleUrls: ['./trouble-notice.component.scss']
})
export class TroubleNoticeComponent implements OnInit {
  public addNotice: FormGroup;
  public esDate: any = Es;
  // public formData: FormData = new FormData();
  public hidCorrectorOption: Array<object> = [];
  public code: any;
  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private troubleSrv: TroubleProcessService,
    private globalSrv: GlobalService,
    private datePipe: DatePipe,
    private toolSrv: PublicMethodService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      this.code = val.code;
    });
    this.addNotice = this.fb.group({
      correctorId: new FormControl('', Validators.required),
      hidDangerCode: new FormControl(this.code, Validators.required),
      rectificationOpinions: new FormControl('', Validators.required),
      requiredCompletionTime: new FormControl('', Validators.required),
    });
    this.getCorrector();
  }

  // 返回上一级
  public backPreviouClick(): void {
    history.go(-1);
  }

  public  IssuedNoticeClick(): void {
      // console.log(123);
    if (this.addNotice.valid){
      // this.formData.append('hidDangerCode', this.code);
      const subMitDta = JSON.parse(JSON.stringify(this.addNotice.value));
      subMitDta.requiredCompletionTime = this.datePipe.transform(subMitDta.requiredCompletionTime, 'yyyy-MM-dd');
      this.toolSrv.setConfirmation('下发整改', '通知整改', () => {
        this.troubleSrv.issuedNoticeToRectify(subMitDta).subscribe(value => {
          this.addNotice.reset();
          this.router.navigate(['home//trouble/process/list']);
        });
      });
    }else {
      this.toolSrv.setToast('error', '操作错误', '带型号的数据未填写完整');
    }
  }
  // 获取负责人
  public  getCorrector(): void {
      this.troubleSrv.getCorrectorData({}).subscribe(val => {
        this.hidCorrectorOption = setDrapdownOptionList(val.data.data);
        console.log(val);
      });
  }
}
