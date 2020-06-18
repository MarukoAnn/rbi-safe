import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BigRiskService {

  constructor(
    private http: HttpClient
  ) { }
  /*-----------------------------------重大危险源档案-----------------------------------*/
  /**
   * 重大危险源档案分页
   * @param params
   */
  public getRiskArchivesPageData(params: any): Observable<any> {
    return this.http.post(`/seriousDanger/findSeriousDangerByPage`, params);
  }
  /**
   * 更新重大危险源档案
   * @param params
   */
  public updateRiskArchivesData(params: any): Observable<any> {
    return this.http.post(`/seriousDanger/updateSeriousDanger`, params);
  }

  /*-----------------------------------重大危险源是被------------------------------------*/
  /**
   * 更新重大危险源档案
   * @param params
   */
  public addRiskDiscernData(params: any): Observable<any> {
    return this.http.post(`/seriousDanger/insertSeriousDanger`, params);
  }
}
