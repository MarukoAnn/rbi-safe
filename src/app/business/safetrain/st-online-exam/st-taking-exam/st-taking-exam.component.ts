import { Component, OnInit } from '@angular/core';
import {StOnlineExamService} from '../../../../common/services/st-online-exam.service';
import {ActionReducer} from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';
import {PublicMethodService} from '../../../../common/public/public-method.service';

@Component({
  selector: 'app-st-taking-exam',
  templateUrl: './st-taking-exam.component.html',
  styleUrls: ['./st-taking-exam.component.scss']
})
export class StTakingExamComponent implements OnInit {

  public paperId: number;
  public paparTime: number;
  public countdownClock: any;
  public paperTitle: string = '';
  public singleChoiceQuestions: Array<object> = [];
  public multipleChoiceQuestions: Array<object> = [];
  public judgmentQuestions: Array<object> = [];
  public completion: Array<object> = [];
  constructor(
    private stOnlineExamSrv: StOnlineExamService,
    private route: ActivatedRoute,
    private toolSrv: PublicMethodService,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(val => {
      this.paperId = val.id;
      this.paparTime = val.time;
    });
    console.log(this.paparTime);
    this.setCountdown();
    this.initTaskExamPaperInfo();
  }

  public  initTaskExamPaperInfo(): void {
      this.stOnlineExamSrv.getExamInfo({id: this.paperId}).subscribe(res => {
        console.log(res);
        this.paperTitle = res.data.testPaperName;
        this.singleChoiceQuestions = res.data.singleChoiceQuestions;
        this.multipleChoiceQuestions = res.data.multipleChoiceQuestions;
        this.judgmentQuestions = res.data.judgmentQuestions;
        this.completion = res.data.completion;
      });
  }

  // 设置倒计时
  public  setCountdown(): void {
    let h: any = Math.floor(this.paparTime / 60);
    let m: any = (this.paparTime % 60);
    let s: any = 0;
    h = h < 10 ? '0' + h : h;
    const timeOclock = setInterval(() => {
      if (Number(s) === 0){
        if (Number(m) === 0){
          if (Number(h) === 0){
            h = 0;
            m = 0;
            s = 0;
            clearInterval(timeOclock);
            this.submitPaperClik();
          }else {
            m = 59;
            h = h - 1;
          }
          h = h < 10 ? '0' + h : h;
        }else {
          m = m - 1;
          s = 59;
        }
        m = m < 10 ? '0' + m : m;
      }else {
        s = Number(s) - 1;
      }
      s = s < 10 ? '0' + s : s;
      this.countdownClock = h + ':' + m + ':' + s;
    }, 1000);
  }
 // 交卷
  public  submitPaperClik(): void {
     this.toolSrv.setConfirmation('交卷', '交卷', () => {

     });
  }
}
