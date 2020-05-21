import {Component, OnInit} from '@angular/core';
import {EveryCategory, OrgTree} from '../../../../../common/public/Api';
import {Es, orgInitializeTree, dataTrees} from '../../../../../common/public/contents';
import {GlobalService} from '../../../../../common/services/global.service';

@Component({
  selector: 'app-pl-input',
  templateUrl: './pl-input.component.html',
  styleUrls: ['./pl-input.component.scss']
})
export class PlInputComponent implements OnInit {
  // @ViewChild(Calendar, {static: true}) calendar: Calendar;
  public cars: EveryCategory[];
  public selectedCar1: EveryCategory;
  public startDate: Date;
  public sendDate: Date;
  public display: boolean = false;
  public es: any;
  public dataTrees: OrgTree[] = [];
  public dataTree: OrgTree = {};
  constructor(
    private globalSrv: GlobalService,
  ) { }
  ngOnInit() {
    this.cars = [
      {name: '全部', value: '1', flag: 0},
      {name: 'Audi', value: 'Audi', flag: 0},
      {name: 'BMW', value: 'BMW', flag: 1},
    ];
    this.es = Es;
    this.globalSrv.getOrgazitionTreeData().subscribe(
      (res) => {
        console.log(res);
        // this.dataTrees = orgInitializeTree(res.data,'fa fa-address-card-o');
        this.dataTrees = dataTrees;
        console.log(this.dataTrees);
      }
    );
  }
  public showDialog() {
    this.display = true;
  }
}
