import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StPlainService {

  constructor(
    private http: HttpClient
  ) {
  }
// 获取组织树结构
  public getOrgTree(params?: {}): Observable<any> {
    return this.http.post('/getOrganizationTree', params);
  }
}
