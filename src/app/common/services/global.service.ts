import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(
    private http: HttpClient
  ) { }

  // 获取组织结构
  public  getOrgazitionTreeData(params?: {}): Observable<any> {
    return this.http.post(`/getOrganizationTree`, params);
  }
  public  getRolesInfo(pamars): Observable<any> {
      return this.http.post(`/getRole`, pamars);
  }
  // 获取权限树
  public  getLimitTreeData(): Observable<any>  {
      return this.http.post(`/getSystemMenuPermissonTree`, {});
  }
}

