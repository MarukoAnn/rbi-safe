import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../common/services/login.service';
import {PublicMethodService} from '../common/public/public-method.service';
import {LocalStorageService} from '../common/services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public username = '';
  public password = '';

  constructor(
    private route: Router,
    private loginSrv: LoginService,
    private toolSrv: PublicMethodService,
    private localSrv: LocalStorageService
  ) {
  }

  ngOnInit() {
  }

  public loginClick(): void {
    if (this.username !== '' && this.password !== '') {
      this.loginSrv.login({username: this.username, password: this.password}).subscribe(val => {
        console.log(val);
        if (val.status === '1000') {
          this.toolSrv.setToast('success', '请求成功', val.message);
          this.localSrv.set('token', val.token);
          this.localSrv.set('companyPersonnelId', val.data.companyPersonnelId);
          this.route.navigate(['home/main']);
        } else {
          this.toolSrv.setToast('error', '登录错误', val.message);
        }
      });
    }
  }
}
