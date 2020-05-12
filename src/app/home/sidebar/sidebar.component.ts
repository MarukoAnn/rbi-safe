import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input()
  private firWidth: any;
  @Output()
  private outWith = new EventEmitter<any>();
  public fistItem = [
    {
      icon: {class: 'iconicon_home', fontsize: '16px', color: '#FCCF4F'},
      bgc: '#4E88DE',
      label: '首页',
      lefticon: '',
      children: [],
      link: 'home/main'
    },
    {
      icon: {class: 'iconOutline-1', fontsize: '14px', color: '#fff'},
      bgc: '#226AD5',
      label: '安全教育培训',
      lefticon: 'fa-angle-down',
      children: [
        {item: {label: '教育培训制度', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '教育培训需求', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '教育培训计划', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '培训内容库设置', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '档案培训管理', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '教育培训制度', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '开始学习', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '我的培训档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconOutline-2', fontsize: '16px', color: '#fff'},
      bgc: '#226AD5',
      label: '安全风险管控',
      lefticon: 'fa-angle-down',
      children: [
        {item: {label: '风险分级管控现状', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '风险分级管控制度', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '风险管理', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '风险档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconOutline-3', fontsize: '16px', color: '#fff'},
      bgc: '#226AD5',
      label: '重大危险源管理',
      lefticon: 'fa-angle-down',
      children: [
        {item: {label: '重大危险源现状分析', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '重大危险源管理制度', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '重大危险源识别', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '重大危险源档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconzu69', fontsize: '14px', color: '#fff'}, label: '隐患排查治理', bgc: '#226AD5', lefticon: 'fa-angle-down', children: [
        {item: {label: '隐患排查治理状况', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '隐患排查治理制度', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '隐患排查', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '隐患处理', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '隐患档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconzu106', fontsize: '16px', color: '#fff'}, label: '职业健康管理', bgc: '#226AD5', lefticon: 'fa-angle-down', children: [
        {item: {label: '职业健康规章制度', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '职业健康台账管理', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '职业病危害项目申报', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '职业病危害因素检测与检测评价档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '隐患档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconOutline-4', fontsize: '14px', color: '#fff'},
      label: '一岗双责管理',
      bgc: '#226AD5',
      lefticon: 'fa-angle-down',
      children: [
        {item: {label: '一岗双责管理制度', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '一岗双责责任清单制定', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '责任清单档案', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    // tslint:disable-next-line:max-line-length
    {
      icon: {class: 'iconlujing2313', fontsize: '16px', color: '#fff'},
      label: '制度管理',
      bgc: '#226AD5',
      lefticon: 'fa-angle-down',
      children: [
        {item: {label: '企业规章制度', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '企业规章制度管理', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconlujing331', fontsize: '16px', color: '#fff'}, label: '综合信息', bgc: '#226AD5', lefticon: 'fa-angle-down', children: [
        {item: {label: '信息公告栏', ftcolor: '#4F88DE', bgc: '#D1E0F7'}, link: '', isHas: true},
        {item: {label: '生产调度信息展示', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
        {item: {label: '公共信息发布', ftcolor: '#A7A7A7', bgc: '#fff'}, link: '', isHas: true},
      ]
    }
  ];
  public secItem = [];

  constructor() {
  }

  ngOnInit() {

  }

  // 二级导航点击事件
  public secItemClick(item): void {
    this.secItem.forEach(val => {
      val.item.bgc = '#fff';
      val.item.ftcolor = '#A7A7A7';
    });
    item.item.bgc = '#D1E0F7';
    item.item.ftcolor = '#4F88DE';
  }

  // 一级导航点击事件
  public firItemClick(item): void {
    this.fistItem.forEach(val => {
      val.icon.color = '#fff';
      val.bgc = '#226AD5';
      if (val.label !== '首页') {
        val.lefticon = 'fa-angle-down';
      } else {
        val.lefticon = '';
      }
    });
    item.icon.color = '#FCCF4F';
    item.bgc = '#4E88DE';
    if (item.label !== '首页') {
      item.lefticon = 'fa-angle-right';
    }
    this.setBodyMarginLeft(item.label);
    this.secItem = item.children;
  }

  // 设置中间内容离左边
  public setBodyMarginLeft(label): void {
    if (label === '首页') {
      if (this.firWidth === 3) {
        this.outWith.emit(3);
      } else {
        this.outWith.emit(10);
      }
    } else {
      if (this.firWidth === 3) {
        this.outWith.emit(11);
      } else {
        this.outWith.emit(18);
      }
    }
  }

}
