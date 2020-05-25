import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(private http: HttpClient) {}
  // 获取组织树
  public  getOrgazitionTreeData(params?: {}): Observable<any> {
    return this.http.post(`/getOrganizationTree`, params);
  }
  // 获取角色列表
  public  getRolesInfo(pamars): Observable<any> {
    return this.http.post(`/getRole`, pamars);
  }
  // 获取权限树
  public  getLimitTreeData(params?: {}): Observable<any> {
    return this.http.post(`/getSystemMenuPermissonTree`, params);
  }


  // 隐患排查模块公共参数接口
  public  getHidConfigData(params?: {}): Observable<any> {
    return this.http.post(`/hid/findAdmChoose`, params);
  }
}
