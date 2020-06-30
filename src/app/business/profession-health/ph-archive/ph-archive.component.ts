import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ph-archive',
  templateUrl: './ph-archive.component.html',
  styleUrls: ['./ph-archive.component.scss']
})
export class PhArchiveComponent implements OnInit {
  public tabitem = [
    {item: {label: '日常检测', ftcolor: '#4F88DE', bgc: '#4F88DE'}, simbol: 'daily'},
    {item: {label: '定期检测', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'regular'},
    {item: {label: '现状评价', ftcolor: '#B3B3B3', bgc: '#EDEDED'}, simbol: 'rate'},
  ];
  public simbol = 'daily';
  constructor() { }

  ngOnInit() {
    this.tabitem.forEach(val => {
      if (val.simbol === this.simbol){
        val.item.ftcolor = '#4F88DE';
        val.item.bgc = '#4F88DE';
      }else {
        val.item.ftcolor = '#D4D4D4';
        val.item.bgc = '#EDEDED';
      }
    });
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
