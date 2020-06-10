import { Component, OnInit } from '@angular/core';
import {PageOption} from '../../../../common/public/Api';
import {StOnlineExamService} from '../../../../common/services/st-online-exam.service';
import {Subscription} from 'rxjs';
import {StStartStudyService} from '../../../../common/services/st-start-study.service';

@Component({
  selector: 'app-st-learn-library',
  templateUrl: './st-learn-library.component.html',
  styleUrls: ['./st-learn-library.component.scss']
})
export class StLearnLibraryComponent implements OnInit {
  public pageNo: number = 1;
  public arcActiveIndex: number = 0;
  public libraryTypeOption: Array<object> = [];
  public libraryType: any;
  public libraryTypeName: string = '';
  public arcTabItem = [
    {item: {label: '培训课件', ftcolor: '#4F88DE', bgc: '#4F88DE'}},
    {item: {label: '培训视频', ftcolor: '#B3B3B3', bgc: '#EDEDED'}},
  ];
  constructor(
    private stStudySrv: StStartStudyService
  ) {
  }
  ngOnInit() {
    this.initLibraryFindType();
  }
  public  initLibraryFindType(): void {
      this.stStudySrv.getStudyFindLibraryType({}).subscribe(res => {
        // console.log(res);
        res.data.map((val, index) => {
          if (index === 0){
            this.libraryType = val.id;
            this.libraryTypeName = val.contentCategoryName;
          }
          this.libraryTypeOption.push({label: val.contentCategoryName, value: val.id});
        });
      });
  }
  public arcTabItemClick(index): void {
    this.arcActiveIndex = index;
    this.arcTabItem.forEach(val => {
      val.item.ftcolor = '#D4D4D4';
      val.item.bgc = '#EDEDED';
    });
    this.arcTabItem[index].item.ftcolor = '#4F88DE';
    this.arcTabItem[index].item.bgc = '#4F88DE';
  }

  public  changeLibraryTypeName(e): void {
    this.libraryTypeOption.forEach(val => {
      // @ts-ignore
      if (val.value === e.value){
        // @ts-ignore
        this.libraryTypeName = val.label;
      }
    });
  }
}
