import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LocalStorageService} from '../../../common/services/local-storage.service';
import {HomeService} from '../../../common/services/home.service';
import {PersonInfo, PersonInfoClass} from '../../../common/public/Api';
import {objectCopy} from '../../../common/public/contents';

@Component({
  selector: 'app-header-sidebar',
  templateUrl: './header-sidebar.component.html',
  styleUrls: ['./header-sidebar.component.scss']
})
export class HeaderSidebarComponent implements OnInit {
  public hdPersonInfo: PersonInfo = new PersonInfoClass();
  public hdSideBarShow: boolean = false;
  constructor(
    private router: Router,
    private localSrv: LocalStorageService,
    private HomeSrv: HomeService,
  ) { }

  ngOnInit() {
    this.HomeSrv.getPersonInfo().subscribe((res) => {
      this.hdPersonInfo = objectCopy(new PersonInfoClass(), res.data);
    });
  }
  public loginOut() {
    this.localSrv.clear();
    this.router.navigate(['/login']);
  }
}
