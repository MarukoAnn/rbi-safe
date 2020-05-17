import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.scss']
})
export class UserManagerComponent implements OnInit {

  public tabitem = [
    {item: {label: '公司人员账号信息管理', ftcolor: '#4F88DE', bgc: '#4F88DE'}, simbol: 'personnel'},
    {item: {label: '公司管理人员账号信息管理', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'admin'},
  ];
  public simbol = 'personnel';
  constructor() { }

  ngOnInit() {
  }
  public  tabItemClick(item): void {
    this.tabitem.forEach(val => {
      val.item.ftcolor = '#D4D4D4';
      val.item.bgc = '#EDEDED';
    });
    item.item.ftcolor = '#4F88DE';
    item.item.bgc = '#4F88DE';
    this.simbol = item.simbol;
  }
}
