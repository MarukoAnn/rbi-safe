import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http: HttpClient) { }

  /**
   * 复审名单列表获取
   * @param params
   */
  public getReviewList(params: any): Observable<any> {
    return this.http.post(`/pagingSpecialReview`, params);
  }

  /**
   * 更新特种人员信息
   * @param params
   */
  public updateArchivesInfo(params: any): Observable<any> {
    return this.http.post(`/training/updateSpecialTraining`, params);
  }

  /**
   * 处理特种人员复审信息
   * @param params
   */
  public handleReviewInfo(params: any): Observable<any> {
    return this.http.post(`/handleSpecialReview`, params);
  }

  /*-----------------------------------------------------------------------------------------*/
  //  主要负责人/安全生产管理员模块
  /**
   * 分页查询
   * @param params
   */
  public getPrincipalPageInfo(params: any): Observable<any> {
    return this.http.post(`/administratorReview/findByPage`, params);
  }

  /**
   * 取消审核
   * @param params 传参
   */
  public canclePrincipalReveiew(params: any): Observable<any> {
    return this.http.post(`/administratorReview/cancel`, params);
  }

  /**
   * 复审
   * @param params 传参
   * @constructor
   */
  public principalReveiewToPass(params: any): Observable<any> {
    return this.http.post(`/administratorReview/review`, params);
  }
}
