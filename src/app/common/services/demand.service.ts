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
}
