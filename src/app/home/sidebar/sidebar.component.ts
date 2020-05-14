import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {LocalStorageService} from '../../common/services/local-storage.service';
import {Route, Router} from '@angular/router';

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
      link: '/home/main'
    },
    {
      icon: {class: 'iconOutline-1', fontsize: '14px',  color: '#fff'},
      bgc: '#226AD5',
      label: '安全教育培训',
      lefticon: 'fa-angle-down',
      link: '/home/strain/institu',
      children: [
        {item:{label: '教育培训制度', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '/home/strain/institu', isHas: true},
        {item: {label: '教育培训需求', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '/home/strain/demand/report', isHas: true},
        {item: {label: '教育培训计划',  bgc: '#fff', ftcolor: '#8E8E8E'}, link: '/home/strain/plain', isHas: true},
        {item: {label: '培训内容库设置', bgc: '#fff', ftcolor: '#8E8E8E' }, link: '/home/strain/contentset', isHas: true},
        {item: {label: '档案培训管理', bgc: '#fff', ftcolor: '#8E8E8E' },  link: '', isHas: true},
        {item: {label: '教育培训制度', bgc: '#fff', ftcolor: '#8E8E8E' },  link: '', isHas: true},
        {item: {label: '开始学习', bgc: '#fff', ftcolor: '#8E8E8E' },  link: '', isHas: true},
        {item: {label: '我的培训档案', bgc: '#fff', ftcolor: '#8E8E8E' }, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconOutline-2', fontsize: '16px',  color: '#fff'},
      bgc: '#226AD5',
      label: '安全风险管控',
      lefticon: 'fa-angle-down',
      link: '/home/strain/institu1',
      children: [
        {item: {label: '风险分级管控现状', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '风险分级管控制度', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '风险管理',  bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '风险档案',  bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconOutline-3', fontsize: '16px',  color: '#fff'},
      bgc: '#226AD5',
      label: '重大危险源管理',
      lefticon: 'fa-angle-down',
      link: '/home/strain/institu2',
      children: [
        {item: {label: '重大危险源现状分析', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '重大危险源管理制度', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '重大危险源识别', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '重大危险源档案', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconzu69', fontsize: '14px', color: '#fff'}, bgc: '#226AD5', label: '隐患排查治理', link: '/home/strain/institu6', lefticon: 'fa-angle-down', children: [
        {item: {label: '隐患排查治理状况', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '隐患排查治理制度', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '隐患排查', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '隐患处理', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '隐患档案', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconzu106', fontsize: '16px', color: '#fff'}, bgc: '#226AD5', label: '职业健康管理', link: '/home/strain/institu7', lefticon: 'fa-angle-down', children: [
        {item: {label: '职业健康规章制度', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '职业健康台账管理', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '职业病危害项目申报', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '职业病危害因素检测与检测评价档案', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '隐患档案', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconOutline-4', fontsize: '14px', color: '#fff'},
      bgc: '#226AD5',
      label: '一岗双责管理',
      lefticon: 'fa-angle-down',
       link: '/home/strain/institu3',
      children: [
        {item: {label: '一岗双责管理制度', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '一岗双责责任清单制定', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '责任清单档案', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    },
    // tslint:disable-next-line:max-line-length
    {
      icon: {class: 'iconlujing2313', fontsize: '16px', color: '#fff'},
      bgc: '#226AD5',
      label: '制度管理',
      lefticon: 'fa-angle-down',
      link: '/home/strain/institu4',
      children: [
        {item: {label: '企业规章制度', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '企业规章制度管理', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    },
    {
      icon: {class: 'iconlujing331', fontsize: '16px', color: '#fff'}, bgc: '#226AD5', label: '综合信息', lefticon: 'fa-angle-down', link: '/home/strain/institu5', children: [
        {item: {label: '信息公告栏', bgc: '#D1E0F7', ftcolor: '#4F88DE'}, link: '', isHas: true},
        {item: {label: '生产调度信息展示', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
        {item: {label: '公共信息发布', bgc: '#fff', ftcolor: '#8E8E8E'}, link: '', isHas: true},
      ]
    }
  ];
  public setItem = [
    {
      icon: {class: 'iconicon_home', fontsize: '16px', color: '#FCCF4F'},
      bgc: '#4E88DE',
      label: '首页',
      lefticon: '',
      children: [],
      link: '/home/main'
    },
    {
      icon: {class: 'iconicon_home', fontsize: '16px', color: '#fff'},
      bgc: '#226AD5',
      label: '用户管理',
      lefticon: '',
      children: [],
      link: '/home/main1'
    },
    {
      icon: {class: 'iconicon_home', fontsize: '16px',  color: '#fff'},
      bgc: '#226AD5',
      label: '权限管理',
      lefticon: '',
      children: [],
      link: '/home/main2'
    },
    {
      icon: {class: 'iconicon_home', fontsize: '16px', color: '#fff'},
      bgc: '#226AD5',
      label: '角色管理',
      lefticon: '',
      children: [],
      link: '/home/main3'
    },
    {
      icon: {class: 'iconicon_home', fontsize: '16px',  color: '#fff'},
      bgc: '#226AD5',
      label: '公司管理',
      lefticon: '',
      children: [],
      link: '/home/main4'
    },
  ];
  public isSetBar: any;
  public secItem = [];
  public barItem = [];

  constructor(
    private localSrv: LocalStorageService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.isSetBar = this.localSrv.get('isSetBar');
    if (this.isSetBar !== 'true') {
      this.barItem = this.fistItem;
    } else {
      this.barItem = this.setItem;
    }
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
    if (this.isSetBar !== 'true') {
      this.setBodyMarginLeft(item.label);
      this.secItem = item.children;
    } else {
      if (item.label === '首页') {
        this.isSetBar = 'false';
        this.fistItem[0].bgc = '#4E88DE';
        this.fistItem[0].icon.color = '#FCCF4F';
        this.barItem = this.fistItem;
        this.localSrv.set('isSetBar', 'false');
      }
    }
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

  // 二级路由切换
  public  secItemClick(item): void {
      this.secItem.forEach(val => {
        val.item.bgc = '#fff';
        val.item.ftcolor = '#8E8E8E';
      });
      item.item.bgc = '#D1E0F7';
      item.item.ftcolor = '#4F88DE';
  }

  // 路由切换
  public  routerLinkClick(item): void {
      // console.log(item.link);
      this.router.navigate([item.link]);
  }

  public  changeBar(): void {
      this.barItem = this.setItem;
      this.secItem = [];
  }
}
