import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SetingService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 公司人员管理模块
   * @param pamars
   */
  // 分页公司人员
  public  getPersonnelPageData(pamars): Observable<any> {
     return this.http.post(environment.url_safe + `/company_personnel/query/page`, pamars);
  }
  // 新增公司人员信息
  public  addPersonnelInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/company_personnel/add`, pamars);
  }
  // 批量删除公司人员信息
  public  delPersonnelInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/company_personnel/delete`, pamars);
  }
  // 更新公司人员信息
  public  updatePersonnelInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/company_personnel/update`, pamars);
  }
  // 更新公司人员信息
  public  imoprtPersonnelInfoFile(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/company_personnel/excel_import`, pamars);
  }

  /**
   * 用户模块
   * @param pamars
   */
  // 分页查询用户信息
  public  getUserInfoPageData(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/pageQueryUserInfo`, pamars);
  }
  // 删除用户信息
  public  delUserInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/deleteUser`, pamars);
  }
  // 删除用户信息
  public  updateUserInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/updateUser`, pamars);
  }
  // 删除用户信息
  public  addUserInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/insertUser`, pamars);
  }

  /**
   * 组织管理模块
   * @param pamars
   */
  // 分页查询组织信息
  public  getOrgazitionInfoPageData(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/pageOrganization`, pamars);
  }
  // 添加组织
  public  addOrgazitionInfo (pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/insertOrganization`, pamars);
  }
  // 更新组织
  public updateOrgazitionInfo (pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/updateOrganization`, pamars);
  }

  /**
   * 角色模块
   * @param pamars
   */
  // 分页角色信息
  public  getRoleInfoPageData(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/pageRole`, pamars);
  }

  // 添加角色信息
  public  addRoleInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/insertRole`, pamars);
  }

  // 更新角色信息
  public  updateRoleInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/updateRole`, pamars);
  }


  /**
   * 权限模块
   * @param pamars
   */
  // 分页权限信息
  public  getPermissionInfoPageData(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/sysPermission/findSysPermissionByPage`, pamars);
  }

  // 添加权限信息
  public  addPermissionInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/sysPermission/insertSysPermission`, pamars);
  }

  // 更新权限信息
  public  updatePermissionInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/sysPermission/updateSysPermission`, pamars);
  }

  // 删除权限信息
  public  delPermissionInfo(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/sysPermission/deleteSysPermissionById`, pamars);
  }

  // 根据id查询权限
  public  queryPermissionInfoById(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/sysPermission/findSysPermissionById`, pamars);
  }
}
