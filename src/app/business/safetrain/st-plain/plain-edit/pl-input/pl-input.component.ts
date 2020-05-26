import {Component, OnInit} from '@angular/core';
import {EveryCategory, OrgTree} from '../../../../../common/public/Api';
import {Es, orgInitializeTree} from '../../../../../common/public/contents';
import {GlobalService} from '../../../../../common/services/global.service';

@Component({
  selector: 'app-pl-input',
  templateUrl: './pl-input.component.html',
  styleUrls: ['./pl-input.component.scss']
})
export class PlInputComponent implements OnInit {
  // @ViewChild(Calendar, {static: true}) calendar: Calendar;
  public iptDropdownOptions: EveryCategory[];
  public iptDropdownSelected: EveryCategory;
  public iptStartDate: Date;
  public ipTendDate: Date;
  public iptOrgModal: boolean = false;
  public iptEs: any = Es;
  public iptOrgTree: OrgTree[] = [];
  public iptOrgTreeSelect: OrgTree = {};
  public iptInputFiled: any = {
    title: '',
    duration: null
  };
  constructor(
    private globalSrv: GlobalService,
  ) { }
  ngOnInit() {
    this.iptDropdownOptions = [
      {name: '全部', value: '1', flag: 0},
      {name: 'Audi', value: 'Audi', flag: 0},
      {name: 'BMW', value: 'BMW', flag: 1},
    ];
    this.globalSrv.getOrgazitionTreeData().subscribe(
      (res) => {
        this.iptOrgTree = orgInitializeTree(res.data);
      }
    );
  }
  public showDialog() {
    this.iptOrgModal = true;
  }
}
