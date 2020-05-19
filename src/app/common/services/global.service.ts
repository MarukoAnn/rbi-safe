import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  constructor(
    private http: HttpClient
  ) { }

  public  getOrgazitionTreeData(pamars): Observable<any> {
    return this.http.post(environment.url_safe + `/getOrganizationTree`, pamars);
  }
  public  getRolesInfo(pamars): Observable<any> {
      return this.http.post(environment.url_safe + `/getRole`, pamars);
  }
}
