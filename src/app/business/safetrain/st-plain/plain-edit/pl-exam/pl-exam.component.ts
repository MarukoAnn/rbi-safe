import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pl-exam',
  templateUrl: './pl-exam.component.html',
  styleUrls: ['./pl-exam.component.scss']
})
export class PlExamComponent implements OnInit {
  @Output() nextChange: EventEmitter<any> = new EventEmitter<any>();
  @Output() previousChange: EventEmitter<any> = new EventEmitter<any>();
  public traTabActiveIndex: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
