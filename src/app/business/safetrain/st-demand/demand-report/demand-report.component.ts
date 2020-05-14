import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demand-report',
  templateUrl: './demand-report.component.html',
  styleUrls: ['./demand-report.component.scss']
})
export class DemandReportComponent implements OnInit {

  public inputItem = [
    {label: '受培训单位', type: 'dropdown', option: [{label: '全部', value: '0'}], value: '0' },
    {label: '日常培训类别', type: 'dropdown', option: [{label: '全部', value: '0'}], value: '' },
    {label: '培训内容', type: 'input', option: [], value: '' },
    {label: '培训时长', type: 'input', option: [], value: '' },
    {label: '组织培训单位', type: 'dropdown', option: [{label: '全部', value: '0'}], value: '' },
  ];
  constructor() { }

  ngOnInit() {
  }

}
