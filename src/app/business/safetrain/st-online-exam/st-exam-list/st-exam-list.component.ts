import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-st-exam-list',
  templateUrl: './st-exam-list.component.html',
  styleUrls: ['./st-exam-list.component.scss']
})
export class StExamListComponent implements OnInit {

  public index: number = 0;
  public noExamNum: number =  0;
  public noWrongNum: number =  0;
  public themeSub: Subscription;
  ngOnInit() {
  }


  public clickEvent(e): void {
    console.log(e);
  }
  public  getLength(e): void {
    setTimeout(() => {
      this.noExamNum = e;
    }, 10);
  }

  public  getWrongLength(e): void {
    setTimeout(() => {
      this.noWrongNum = e;
    }, 10);
  }

}
