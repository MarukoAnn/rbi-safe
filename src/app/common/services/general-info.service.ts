import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeneralInfoService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 信息公告栏
   * 分页查询
   * @param pamars
   */
  public  getBulletinBoradPageData(pamars): Observable<any> {
    return this.http.post(`/notice/findByPage`, pamars);
  }

  public  submitinfoRelease(pamars): Observable<any> {
    return this.http.post(`/notice/add`, pamars);
  }
}
