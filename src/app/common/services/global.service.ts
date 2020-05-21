import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(
    private http: HttpClient
  ) { }

  public  getOrgazitionTreeData(params?: {}): Observable<any> {
    return this.http.post(`/getOrganizationTree`, params);
  }
}
