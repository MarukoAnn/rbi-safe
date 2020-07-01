import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ThemeService} from '../../../../common/public/theme.service';
import {StMytrainFileService} from '../../../../common/services/st-mytrain-file.service';

@Component({
  selector: 'app-aptitude-certificate',
  templateUrl: './aptitude-certificate.component.html',
  styleUrls: ['./aptitude-certificate.component.scss']
})
export class AptitudeCertificateComponent implements OnInit {

  public AptitudeCertificateTitleList = [
    {label: '特种人员培训档案id', field: 'id', value: ''},
    {label: '姓名', field: 'name', value: ''},
    {label: '性别', field: 'gender', value: ''},
    {label: '身份证号', field: 'idCardNo', value: ''},
    {label: '文化程度', field: 'degreeOfEducation', value: ''},
    {label: '工种', field: 'typeOfWork', value: ''},
    {label: '操作项目', field: 'operationItems', value: ''},
    {label: '工龄', field: 'workingYears', value: ''},
    {label: '理论成绩', field: 'theoreticalAchievements', value: ''},
    {label: '实际成绩', field: 'actualResults', value: ''},
    {label: '操作证号', field: 'operationCertificateNo', value: ''},
    {label: '发证日期', field: 'dateOfIssue', value: ''},
    {label: '工种年限', field: 'yearsOfWork', value: ''},
    {label: '复审年限', field: 'validityPeriod', value: ''},
    {label: '第一次复审成绩', field: 'oneReviewResults', value: ''},
    {label: '第一次复审时间', field: 'oneReviewTime', value: ''},
    {label: '第二次复审成绩', field: 'towReviewResults', value: ''},
    {label: '第二次复审时间', field: 'towReviewTime', value: ''},
    {label: '第三次复审成绩', field: 'threeReviewResults', value: ''},
    {label: '第三次复审时间', field: 'threeReviewTime', value: ''},
    {label: '第四次复审成绩', field: 'fourReviewResults', value: ''},
    {label: '第四次复审时间', field: 'fourReviewTime', value: ''},
    {label: '第五次复审成绩', field: 'fiveReviewResults', value: ''},
    {label: '第五次复审时间', field: 'fiveReviewTime', value: ''},
    {label: '第六次复审成绩', field: 'sixReviewResults', value: ''},
    {label: '第六次复审时间', field: 'sixReviewTime', value: ''},
  ];
  public themeSub: Subscription;
  constructor(
    private themeSrv: ThemeService,
    private stMytrainFileSrv: StMytrainFileService
  ) {
  }
  ngOnInit() {
    this.initMytrainFile();
  }
  public initMytrainFile(): void {
    this.stMytrainFileSrv.getCertificalLevelPageData().subscribe(res => {
      if (res.data){
        this.AptitudeCertificateTitleList.forEach(val => {
          val.value = res.data[val.field];
        });
      }
    });
  }

}
