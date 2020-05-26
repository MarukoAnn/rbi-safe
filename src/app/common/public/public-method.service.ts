import { Injectable } from '@angular/core';
import {ConfirmationService, MessageService} from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PublicMethodService {
  public esDate = {
    firstDayOfWeek: 0,
    dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesShort: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    dayNamesMin: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    monthNames: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    monthNamesShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
    today: '今天',
    clear: '清除'
  };
  // 默认主题
  public defaultTheme = [
    {label: '--header-bgc', value: '#226AD5'},
    {label: '--header-title-bgc', value: '#1E5EBE'},
    {label: '--body-bgc', value: '#F3F3F3'},
    {label: '--firbar-bgc', value: '#226AD5'},
    {label: '--secbar-bgc', value: '#fff'},
  ];
  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) { }

  // 设置主题
  public  setTheme(): void {
    this.defaultTheme.forEach(val => {
      document.documentElement.style.setProperty(val.label, val.value);
    });
  }

  public setToast( type, title, message): void {
    this.messageService.clear();
    this.messageService.add({
      key: 'toast',
      severity: type,
      summary: title,
      detail: message
    });
  }

  public setConfirmation(title, message, callback: (...args: any[]) => any): void {
    this.confirmationService.confirm({
      message: `确认要${message}吗？`,
      header: `${title}` + `提醒`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {

      },
      reject: () => {
        callback();
      }
    });
  }

  public  setConfirmationWarn(title, message, callback: (...args: any[]) => any): void {
    this.confirmationService.confirm({
      message: `${message}？`,
      header: `${title}`,
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        callback();
      },
      reject: () => {
      }
    });
  }


}
