import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StOnlineExamService {

  constructor(
    private Http: HttpClient
  ) { }

  public getOnlineExamOPageInfo(parms): Observable<any> {
      return this.Http.post(`/pagingTestPaperInfo`, parms);
  }

  public  getExamInfo(pamars):  Observable<any>  {
      return this.Http.post(`/getTestPaper`, pamars);
  }
}
