import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-ph-manager',
  templateUrl: './ph-manager.component.html',
  styleUrls: ['./ph-manager.component.scss']
})
export class PhManagerComponent implements OnInit {

  public index: number = 0;
  // public noExamNum: any =  '';
  ngOnInit() {
  }
  public clickEvent(e): void {
    console.log(e);
  }
}
