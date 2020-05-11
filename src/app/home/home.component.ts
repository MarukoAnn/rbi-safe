import { Component, OnInit } from '@angular/core';
import {PublicMethodService} from '../common/public/public-method.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private toolSrv: PublicMethodService
  ) { }

  ngOnInit() {
    this.toolSrv.setTheme();
  }

}
