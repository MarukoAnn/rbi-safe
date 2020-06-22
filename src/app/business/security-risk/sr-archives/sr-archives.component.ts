import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sr-archives',
  templateUrl: './sr-archives.component.html',
  styleUrls: ['./sr-archives.component.scss']
})
export class SrArchivesComponent implements OnInit {
  public tabitem = [
    {item: {label: '区域内', ftcolor: '#4F88DE', bgc: '#4F88DE'}, simbol: 'within'},
    {item: {label: '区域外', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'outside'},
    {item: {label: '重大风险', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'bigrisk'},
  ];
  public simbol = 'within';
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
