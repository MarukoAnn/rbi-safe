import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TroubleShootService {

  constructor(
    private http: HttpClient
  ) { }

  // 添加上报整改
  public  addReportData(pamars?: {}): Observable<any> {
    return this.http.post(`/hid/addReport`, pamars);
  }
  // 添加责令整改
  public  addOrderData(pamars?: {}): Observable<any> {
    return this.http.post(`/hid/addOrder`, pamars);
  }
}
