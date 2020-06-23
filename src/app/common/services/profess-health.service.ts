import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessHealthService {

  constructor(
    private http: HttpClient
  ) { }
  /*-----------------------------------------------职业病危害因素检测与检测评价档案-----------------------------------*/
  /**
   * 日常检测
   * 分页查询
   * @param pamars
   */
  public  getDailyTestPageData(pamars): Observable<any> {
    return this.http.post(`/dailyMonitoring/findByPage`, pamars);
  }

  /**
   * 日常检测
   * 添加
   * @param pamars
   */
  public  addDailyTestData(pamars): Observable<any> {
    return this.http.post(`/dailyMonitoring/add`, pamars);
  }

  /**
   * 日常检测
   * 更新
   * @param pamars
   */
  public  updateDailyTestData(pamars): Observable<any> {
    return this.http.post(`/dailyMonitoring/update`, pamars);
  }
  /**
   * 日常检测
   * 删除
   * @param pamars
   */
  public  delDailyTestData(pamars): Observable<any> {
    return this.http.post(`/dailyMonitoring/delete`, pamars);
  }



  /**
   * 定期检测
   * 分页查询
   * @param pamars
   */
  public  getRegularTestPageData(pamars): Observable<any> {
    return this.http.post(`/regularMonitoring/findByPage`, pamars);
  }

  /**
   * 定期检测
   * 添加
   * @param pamars
   */
  public  addRegularTestData(pamars): Observable<any> {
    return this.http.post(`/regularMonitoring/add`, pamars);
  }

  /**
   * 定期检测
   * 更新
   * @param pamars
   */
  public  updateRegularTestData(pamars): Observable<any> {
    return this.http.post(`/regularMonitoring/update`, pamars);
  }
  /**
   * 定期检测
   * 删除
   * @param pamars
   */
  public  delRegularTestData(pamars): Observable<any> {
    return this.http.post(`/regularMonitoring/delete`, pamars);
  }
  /**
   * 定期检测
   * 删除文件
   * @param pamars
   */
  public  delRegularTestFile(pamars): Observable<any> {
    return this.http.post(`/regularMonitoring/deleteFile`, pamars);
  }




  /**
   * 现状评价
   * 分页查询
   * @param pamars
   */
  public  getRateNowPageData(pamars): Observable<any> {
    return this.http.post(`/statusEvaluation/findByPage`, pamars);
  }

  /**
   * 现状评价
   * 添加
   * @param pamars
   */
  public  addRateNowData(pamars): Observable<any> {
    return this.http.post(`/statusEvaluation/add`, pamars);
  }

  /**
   * 现状评价
   * 更新
   * @param pamars
   */
  public  updateRateNowData(pamars): Observable<any> {
    return this.http.post(`/statusEvaluation/update`, pamars);
  }
  /**
   * 现状评价
   * 删除
   * @param pamars
   */
  public  delRateNowData(pamars): Observable<any> {
    return this.http.post(`/statusEvaluation/delete`, pamars);
  }
  /**
   * 现状评价
   * 删除文件
   * @param pamars
   */
  public  delRateNowFile(pamars): Observable<any> {
    return this.http.post(`/regularMonitoring/deleteFile`, pamars);
  }

/*-----------------------------------------------职业健康台账管理-----------------------------------*/
  /**
   * 职业卫生“三同时”台账
   * 分页查询
   * @param pamars
   */
  public  getHygienePageData(pamars): Observable<any> {
    return this.http.post(`/health_project/getPage`, pamars);
  }

  /**
   * 职业卫生“三同时”台账
   * 添加
   * @param pamars
   */
  public  addHygieneData(pamars): Observable<any> {
    return this.http.post(`/health_project/insert`, pamars);
  }

  /**
   * 职业卫生“三同时”台账
   * 更新
   * @param pamars
   */
  public  updateHygieneData(pamars): Observable<any> {
    return this.http.post(`/health_project/update`, pamars);
  }
  /**
   * 职业卫生“三同时”台账
   * 删除
   * @param pamars
   */
  public  delHygieneData(pamars): Observable<any> {
    return this.http.post(`/health_project/delete`, pamars);
  }

}
