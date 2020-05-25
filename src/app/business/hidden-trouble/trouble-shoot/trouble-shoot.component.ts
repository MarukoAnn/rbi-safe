import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trouble-shoot',
  templateUrl: './trouble-shoot.component.html',
  styleUrls: ['./trouble-shoot.component.scss']
})
export class TroubleShootComponent implements OnInit {

  public tabitem = [
    {item: {label: '上报整改', ftcolor: '#4F88DE', bgc: '#4F88DE'}, simbol: 'report'},
    {item: {label: '责令整改', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'rectify'},
  ];
  public simbol = 'report';
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
