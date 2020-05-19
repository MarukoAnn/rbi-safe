import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {LocalStorageService} from '../../common/services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public data: any;
  @Output()
  private outer = new EventEmitter();
  @Output()
  private outEvent = new EventEmitter();
  public logoWidth = 10;
  public showNotice = false;
  constructor(
    private localSrv: LocalStorageService
  ) { }

  ngOnInit() {
  }

  public  logoClick(): void {
    if (this.logoWidth === 3) {
      this.logoWidth = 10;
    } else {
      this.logoWidth = 3;
    }
    this.outer.emit(this.logoWidth);
  }
  public  showNoticeClick(): void {
      this.showNotice = !this.showNotice;
  }
  public setClick(): void {
    this.outEvent.emit('true');
    this.localSrv.set('isSetBar', 'true');
  }
}
