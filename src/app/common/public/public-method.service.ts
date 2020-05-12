import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicMethodService {

  // 默认主题
  public defaultTheme = [
    {label: '--header-bgc', value: '#226AD5'},
    {label: '--header-title-bgc', value: '#1E5EBE'},
    {label: '--body-bgc', value: '#F3F3F3'},
    {label: '--firbar-bgc', value: '#226AD5'},
    {label: '--secbar-bgc', value: '#fff'},
  ];
  constructor() { }

  // 设置主题
  public  setTheme(): void {
    this.defaultTheme.forEach(val => {
      document.documentElement.style.setProperty(val.label, val.value);
    });
  }
}
