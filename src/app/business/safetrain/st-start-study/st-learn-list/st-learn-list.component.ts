import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-st-learn-list',
  templateUrl: './st-learn-list.component.html',
  styleUrls: ['./st-learn-list.component.scss']
})
export class StLearnListComponent implements OnInit {

  public index: number = 0;
  public noExamNum: any =  '';
  constructor() {
  }
  ngOnInit() {
  }

  public clickEvent(e): void {
    console.log(e);
  }
  // public  getLength(e): void {
  //   setTimeout(() => {
  //     this.noExamNum = e;
  //   }, 10);
  // }
}
