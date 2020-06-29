import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http: HttpClient) { }

  /**
   * 特种人员信息列表获取
   * @param params
   */
  public getReviewList(params: any): Observable<any> {
    return this.http.post(`/pagingSpecialReview`, params);
  }

  /**
   * 特种人员信息更新
   * @param params
   */
  public updateArchivesInfo(params: any): Observable<any> {
    return this.http.post(`/training/updateSpecialTraining`, params);
  }

  /**
   * 特种人员复审信息处理
   * @param params
   */
  public handleReviewInfo(params: any): Observable<any> {
    return this.http.post(`/handleSpecialReview`, params);
  }

  /**
   * 特种人员复审名单导出
   * @param params
   */
  public exportReviewInfo(params: {completionStatus: null}): Observable<any> {
    return this.http.post(`/exportSpecialReview`, params);
  }

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

  /**
   * 管理员人员复审名单导出
   * @param params
   */
  public exportPrincipalInfo(params: {completionStatus: null}): Observable<any> {
    return this.http.post(`/administratorReview/exportAdminstratorReview`, params);
  }

  /**
   * 获取提前通知时间
   */
  public getSpecialDayInfo(params: any = {}): Observable<any> {
    return this.http.post(`/getSpecialDaySet`, params);
  }

  /**
   * 更新提前通知时间
   */
  public updateSpecialDayInfo(params?: {}): Observable<any> {
    return this.http.post(`/updateSpecialDaySet`, params);
  }
}
