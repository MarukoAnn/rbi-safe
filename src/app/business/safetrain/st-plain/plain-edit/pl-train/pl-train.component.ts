import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pl-train',
  templateUrl: './pl-train.component.html',
  styleUrls: ['./pl-train.component.scss']
})
export class PlTrainComponent implements OnInit {
  public traTabActiveIndex: number = 0;
  constructor() { }

  ngOnInit() {
  }

}