import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-st-institution',
  templateUrl: './st-institution.component.html',
  styleUrls: ['./st-institution.component.scss']
})
export class StInstitutionComponent implements OnInit {

  public itemData = [
    {num: 1, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 2, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 3, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 4, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 5, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 6, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 3, label: 'HSE教育培训制度', time: '2020.05.06'},
    {num: 3, label: 'HSE教育培训制度', time: '2020.05.06'},
    // {num: 3, label: 'HSE教育培训制度', time: '2020.05.06'},
  ];
  constructor() { }

  ngOnInit() {
    // if ()
  }

}
