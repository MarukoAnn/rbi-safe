import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export function init_app(cfg: AppConfig) {
  return () => cfg.load();
}
@Injectable()
export class AppConfig {
  private PERMISSION_TREE: Array<any>;
  constructor(private http: HttpClient) {}
  public getTree(): Array<any> {
    return this.PERMISSION_TREE;
  }
  // 初始化操作
  public load() {
    return new Promise((resolve, reject) => {
      this.http.post('/getSystemMenuPermissonTree', {}).subscribe((response: any) => {
        console.log(response);
        this.PERMISSION_TREE = response.data;
        resolve(response);
      });
    }).then();
  }
}
