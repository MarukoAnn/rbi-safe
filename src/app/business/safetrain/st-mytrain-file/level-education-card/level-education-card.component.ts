import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {PageOption} from '../../../../common/public/Api';
import {ThemeService} from '../../../../common/public/theme.service';
import {StMytrainFileService} from '../../../../common/services/st-mytrain-file.service';

@Component({
  selector: 'app-level-education-card',
  templateUrl: './level-education-card.component.html',
  styleUrls: ['./level-education-card.component.scss']
})
export class LevelEducationCardComponent implements OnInit {

  public EducationLevelDetailTitleList = [
    {label: '组织名称', field: 'organizationName', value: ''},
    {label: '入厂时间', field: 'entryTime', value: ''},
    {label: '工种', field: 'workType', value: ''},
    {label: '公司培训时间', field: 'companyEducationTime', value: ''},
    {label: '分公司级成绩', field: 'companyFraction', value: ''},
    {label: '厂培训时间', field: 'factoryEducationTime', value: ''},
    {label: '厂级成绩', field: 'factoryFraction', value: ''},
    {label: '车间培训时间', field: 'workshopEducationTime', value: ''},
    {label: '车间级成绩', field: 'workshopFraction', value: ''},
    {label: '班组培训时间', field: 'classEducationTime', value: ''},
    {label: '班组级成绩', field: 'classFraction', value: ''},
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
      this.stMytrainFileSrv.getSafeFourLevelPageData().subscribe(res => {
           console.log(res);
           if (res.data){
             this.EducationLevelDetailTitleList.forEach(val => {
               val.value = res.data[val.field];
             });
           }
      });
  }
  // 分页点击事件
  public  clickEvent(e): void {
      console.log(e);
  }

}
