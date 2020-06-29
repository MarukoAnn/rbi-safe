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



  /**
   * 职业病防护措施台账
   * 分页查询
   * @param pamars
   */
  public  getDiseaseProtectPageData(pamars): Observable<any> {
    return this.http.post(`/occHealthEquipment/findOccHealthEquipmentByPage`, pamars);
  }

  /**
   * 职业病防护措施台账
   * 添加
   * @param pamars
   */
  public  addDiseaseProtectData(pamars): Observable<any> {
    return this.http.post(`/occHealthEquipment/insertOccHealthEquipment`, pamars);
  }

  /**
   * 职业病防护措施台账
   * 更新
   * @param pamars
   */
  public  updateDiseaseProtectData(pamars): Observable<any> {
    return this.http.post(`/occHealthEquipment/updateOccHealthEquipment`, pamars);
  }
  /**
   * 职业病防护措施台账
   * 删除
   * @param pamars
   */
  public  delDiseaseProtectData(pamars): Observable<any> {
    return this.http.post(`/occHealthEquipment/deleteOccHealthEquipment`, pamars);
  }



  /**
   * 职业病防护设施运行状况台账
   * 分页查询
   * @param pamars
   */
  public  getDiseaseStatusPageData(pamars): Observable<any> {
    return this.http.post(`/occHealthMaintain/findOccHealthMaintainByPage`, pamars);
  }

  /**
   * 职业病防护设施运行状况台账
   * 添加
   * @param pamars
   */
  public  addDiseaseStatusData(pamars): Observable<any> {
    return this.http.post(`/occHealthMaintain/insertOccHealthMaintain`, pamars);
  }

  /**
   * 职业病防护设施运行状况台账
   * 更新
   * @param pamars
   */
  public  updateDiseaseStatusData(pamars): Observable<any> {
    return this.http.post(`/occHealthMaintain/updateOccHealthMaintain`, pamars);
  }
  /**
   * 职业病防护设施运行状况台账
   * 删除
   * @param pamars
   */
  public  delDiseaseStatusData(pamars): Observable<any> {
    return this.http.post(`/occHealthMaintain/deleteOccHealthMaintain`, pamars);
  }



  /**
   * 职业病防护设施运行状况台账
   * 分页查询
   * @param pamars
   */
  public  getHazardSummaryPageData(pamars): Observable<any> {
    return this.http.post(`/occHealthEndanger/findOccHealthEndangerByPage`, pamars);
  }

  /**
   * 职业病防护设施运行状况台账
   * 添加
   * @param pamars
   */
  public  addHazardSummaryData(pamars): Observable<any> {
    return this.http.post(`/occHealthEndanger/insertOccHealthEndanger`, pamars);
  }

  /**
   * 职业病防护设施运行状况台账
   * 更新
   * @param pamars
   */
  public  updateHazardSummaryData(pamars): Observable<any> {
    return this.http.post(`/occHealthEndanger/updateOccHealthEndanger`, pamars);
  }
  /**
   * 职业病防护设施运行状况台账
   * 删除
   * @param pamars
   */
  public  delHazardSummaryData(pamars): Observable<any> {
    return this.http.post(`/occHealthEndanger/deleteOccHealthEndanger`, pamars);
  }




  /**
   * 职业病防护设施运行状况台账
   * 分页查询
   * @param pamars
   */
  public  getHealthCheckPageData(pamars): Observable<any> {
    return this.http.post(`/healthExamine/findByPage`, pamars);
  }

  /**
   * 职业病防护设施运行状况台账
   * 添加
   * @param pamars
   */
  public  addHealthCheckData(pamars): Observable<any> {
    return this.http.post(`/healthExamine/add`, pamars);
  }

  /**
   * 职业病防护设施运行状况台账
   * 更新
   * @param pamars
   */
  public  updateHealthCheckData(pamars): Observable<any> {
    return this.http.post(`/healthExamine/update`, pamars);
  }
  /**
   * 职业病防护设施运行状况台账
   * 删除
   * @param pamars
   */
  public  delHealthCheckData(pamars): Observable<any> {
    return this.http.post(`/healthExamine/delete`, pamars);
  }




  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 分页查询
   * @param pamars
   */
  public  getDiseasePageData(pamars): Observable<any> {
    return this.http.post(`/diseaseFactors/findByPage`, pamars);
  }

  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 添加
   * @param pamars
   */
  public  addDiseaseData(pamars): Observable<any> {
    return this.http.post(`/diseaseFactors/add`, pamars);
  }

  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 更新
   * @param pamars
   */
  public  updateDiseaseData(pamars): Observable<any> {
    return this.http.post(`/diseaseFactors/update`, pamars);
  }
  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 删除
   * @param pamars
   */
  public  delDiseaseData(pamars): Observable<any> {
    return this.http.post(`/diseaseFactors/delete`, pamars);
  }




  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 分页查询
   * @param pamars
   */
  public  getDiseaseEquimentPageData(pamars): Observable<any> {
    return this.http.post(`/diseaseProtection/findByPage`, pamars);
  }

  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 添加
   * @param pamars
   */
  public  addDiseaseEquimentData(pamars): Observable<any> {
    return this.http.post(`/diseaseProtection/add`, pamars);
  }

  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 更新
   * @param pamars
   */
  public  updateDiseaseEquimentData(pamars): Observable<any> {
    return this.http.post(`/diseaseProtection/update`, pamars);
  }
  /**
   * 接触职业病危害因素人员管理情况汇总表
   * 删除
   * @param pamars
   */
  public  delDiseaseEquimentData(pamars): Observable<any> {
    return this.http.post(`/diseaseProtection/delete`, pamars);
  }
}
