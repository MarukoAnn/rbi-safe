import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   *  系统管理模块
   * @param pamars 请求参数
   */
  // 获取分页数据
  public  getSystemPageData(pamars?: {}): Observable<any> {
      return this.http.post(`/getPageSystemInfo`, pamars);
  }
  // 上传制度文件
  public  uploadSystemFile(pamars?: {}): Observable<any> {
    return this.http.post(`/uploadSystemDocuments`, pamars);
  }
  // 获取文件制度类型
  public  getSystemFileTypeList(pamars?: {}): Observable<any> {
    return this.http.post(`/getSystemTypeBox`, pamars);
  }

  // 删除制度文件
  public  delSystemFile(pamars?: {}): Observable<any> {
    return this.http.post(`/deleteSystemFile`, pamars);
  }
}
