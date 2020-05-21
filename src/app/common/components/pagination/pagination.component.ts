import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  public option: any;
  @Output()
  clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public  paginate(e): void {
     this.clickEvent.emit(e.page + 1);
  }

}
