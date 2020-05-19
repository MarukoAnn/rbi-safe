import {Component, OnInit, ViewChild} from '@angular/core';
import {EveryCategory} from '../../../../../common/until/Api';
import {Es} from '../../../../../common/until/contents';
import {Calendar} from 'primeng/calendar';

@Component({
  selector: 'app-pl-input',
  templateUrl: './pl-input.component.html',
  styleUrls: ['./pl-input.component.scss']
})
export class PlInputComponent implements OnInit {
  // @ViewChild(Calendar, {static: true}) calendar: Calendar;
  public cars: EveryCategory[];
  public selectedCar1: EveryCategory;
  public date7: Date;
  public es: any;
  constructor() { }
  ngOnInit() {
    this.cars = [
      {name: '全部', value: '1', flag: 0},
      {name: 'Audi', value: 'Audi', flag: 0},
      {name: 'BMW', value: 'BMW', flag: 1},
    ];
    this.es = Es;
  }
}
