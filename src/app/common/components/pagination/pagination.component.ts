import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PageOption} from '../../public/Api';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input()
  public option: PageOption;
  @Output()
  clickEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public  paginate(e): void {
     this.clickEvent.emit(e.page + 1);
  }

}
