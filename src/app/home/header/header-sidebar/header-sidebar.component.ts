import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../../common/services/local-storage.service';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent implements OnInit {

  constructor(
    private router: Router,
    private localSrv: LocalStorageService
  ) { }

  ngOnInit() {
  }
  public loginOut() {
    this.localSrv.clear();
    this.router.navigate(['/login']);
  }
}
