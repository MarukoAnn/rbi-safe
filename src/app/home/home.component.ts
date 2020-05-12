import { Component, OnInit } from '@angular/core';
import {PublicMethodService} from '../common/public/public-method.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public barWith: any;
  public bodyMarginLeft = 10;
  constructor(
    private toolSrv: PublicMethodService,
    private router: Router
  ) { }

  ngOnInit() {
    this.toolSrv.setTheme();
  }

  public SideBarWidth(e): void {
    this.barWith = e;
    console.log(this.router.url);
    if (this.router.url === '/home/main') {
      this.bodyMarginLeft = this.barWith;
    } else {
      this.bodyMarginLeft = e + 8;
    }
  }
  public setBodyMarginLeft(e): void {
      this.bodyMarginLeft = e;
  }
}
