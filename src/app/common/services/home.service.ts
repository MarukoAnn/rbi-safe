import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  // 获取个人信息
  public getPersonInfo(params?: {}): Observable<any> {
    return this.http.post(`/findById`, params);
  }
  // 获取个人信息
  public subMitPassword(params?: {}): Observable<any> {
    return this.http.post(`/modifyPwd`, params);
  }
}
