import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-st-plain',
  template: `
    <div class="st-plain">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .st-plain {
      background: #fff;
      width: 100%;
      height: 100%;
    }
  `]
})
export class StPlainComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }
}
