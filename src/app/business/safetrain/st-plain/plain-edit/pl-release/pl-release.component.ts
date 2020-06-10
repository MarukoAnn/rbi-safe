import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pl-release',
  templateUrl: './pl-release.component.html',
  styleUrls: ['./pl-release.component.scss']
})
export class PlReleaseComponent implements OnInit {
  @Output() previousChange: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  // 操作
  public plReleaseOperate(flag: string, id?: any) {
    switch (flag) {
      // 上一步
      case 'previous':
        this.previousChange.emit({activeIndex: 2});
        break;
      // 确认发布
      case 'sure':
        break;
    }
  }
}
