import {Component, OnInit} from '@angular/core';
import {GlobalService} from '../../../common/services/global.service';

@Component({
	selector: 'app-st-institution',
	templateUrl: './st-institution.component.html',
	styleUrls: ['./st-institution.component.scss']
})
export class StInstitutionComponent implements OnInit {
	public itemData: Array<object> = [];
  public searchData: string = '';
	constructor(
	  private globalSrv: GlobalService
  ) {}
	ngOnInit() {
	  this.globalSrv.getEducationList({systemCategoryId: 1}).subscribe((res) => {
	    res.data.forEach(v => {
        this.itemData.push({num: v.id, label: v.fileName, time: v.idt, filePath: v.filePath});
      });
    });
  }
  // 打开文件
  public  openFile(item): void {
    window.open(item.filePath);
  }

  // 搜索文件
  public  searchDataClick(): void {
    // if (this.)
    // this.toolSrv.setToast('error', )
    // console.log(this);
  }
}
