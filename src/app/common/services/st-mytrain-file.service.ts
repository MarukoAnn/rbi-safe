import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StMytrainFileService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * 四级HSE教育卡
   */
  // 四级HSE教育卡分页
  public  getSafeFourLevelPageData(): Observable<any> {
     return this.http.post(`/safeFourLevel/findSafeFourLevelByOperatingStaff`, {});
  }
}
