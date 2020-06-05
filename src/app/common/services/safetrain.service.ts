import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SafetrainService {

  constructor(
    private http: HttpClient
  ) {
  }

  /**
   * 获取特种培训信息列表
   * @param params
   */
  public getArchivesList(params: any): Observable<any> {
    return this.http.post(`/training/pagingSpecialTraining`, params);
  }

  /**
   * 更新特种人员信息
   * @param params
   */
  public updateArchivesInfo(params: any): Observable<any> {
    return this.http.post(`/training/updateSpecialTraining`, params);
  }

  /**
   * 添加特种人员信息
   * @param params
   */
  public addArchivesInfo(params: any): Observable<any> {
    return this.http.post(`/training/insertSpecialTraining`, params);
  }

  /**
   * 培训内容列表获取
   * @param params
   */
  public getScsContentsList(params: any): Observable<any> {
    return this.http.post(`/training/findByPage`, params);
  }

  /**
   * 培训内容添加
   * @param params
   */
  public addScsContentsInfo(params: any): Observable<any> {
    return this.http.post(`/training/add`, params);
  }

  /**
   * 培训内容分类获取
   * @param params
   */
  public getScsContentsClassify(params?: {}): Observable<any> {
    return this.http.post(`/training/findType`, params);
  }

  /**
   * 培训内容删除
   * @param params
   */
  public delScsContentsInfo(params: any): Observable<any> {
    return this.http.post(`/training/deleteByIds`, params);
  }

  /**
   * 培训内容精确搜索
   * @param params
   */
  public searchScsContentsInfo(params: any): Observable<any> {
    return this.http.post(`/training/findByCondition`, params);
  }

  /**
   * 教育培训台账列表获取
   * @param params
   */
  public getEducateList(params: any): Observable<any> {
    return this.http.post(`/safeFourLevel/findSafeFourLevelByPage`, params);
  }

  /**
   * 教育培训台账添加
   * @param params
   */
  public addEducateInfo(params: any): Observable<any> {
    return this.http.post(`/safeFourLevel/insertSafeFourLevel`, params);
  }

  /**
   * 教育培训台账修改
   * @param params
   */
  public updateEducateInfo(params: any): Observable<any> {
    return this.http.post(`/safeFourLevel/updateSafeFourLevel`, params);
  }

  /**
   * 教育培训台账删除
   * @param params
   */
  public delEducateInfo(params: any): Observable<any> {
    return this.http.post(`/safeFourLevel/deleteSafeFourLevelById`, params);
  }

  /**
   * 教育台账分类信息查询
   * @param params
   */
  public searchEducateList(params: any): Observable<any> {
    return this.http.post(`/safeFourLevel/deleteSafeFourLevelById`, params);
  }


  /**
   * 教育培训计划列表获取
   * @param params
   */
  public getProgramList(params: any): Observable<any> {
    return this.http.post(`/pagingSafeDemandReport`, params);
  }
}
