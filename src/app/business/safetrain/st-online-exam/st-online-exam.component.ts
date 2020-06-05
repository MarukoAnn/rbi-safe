import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {PageOption} from '../../../common/public/Api';

@Component({
  selector: 'app-st-online-exam',
  templateUrl: './st-online-exam.component.html',
  styleUrls: ['./st-online-exam.component.scss']
})
export class StOnlineExamComponent implements OnInit {
  public noExamNum: any =  '';
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
}
