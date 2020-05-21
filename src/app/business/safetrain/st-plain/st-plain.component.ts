import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-st-plain',
  template: `
    <div class="st-plain">
      <p-scrollPanel [style]="{width: '100%', height: '100%'}">
        <router-outlet></router-outlet>
      </p-scrollPanel>
    </div>
  `,
  styles: [`
    .st-plain {
      background: #fff;
      width: 100%;
      height: 100%;
    }
    ::ng-deep .plain-list-processed-search .ui-widget {
      border-radius: 20px;
      color: #8D8E96;
      font-size: 14px;
      height: 32px;
      border: 1px solid #F0F0F0;
      background: #F8F8F8;
    }
    ::ng-deep .ui-inputtext {
      margin-right: 2rem;
    }
    /*隐藏滚动条*/
      ::ng-deep .ui-scrollpanel-bar {
        display: none;
      }
    ::ng-deep .ui-scrollpanel-content{
      padding: 0 2vw;
    }
  `]
})
export class StPlainComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
