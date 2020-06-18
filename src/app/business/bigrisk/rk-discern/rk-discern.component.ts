import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rk-discern',
  templateUrl: './rk-discern.component.html',
  styleUrls: ['./rk-discern.component.scss']
})
export class RkDiscernComponent implements OnInit {

  public addDiscern: FormGroup;
  public ImageOption = {
    files: [],
    showUploadIcon: true
  };
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addDiscern = this.fb.group({
      seriousDangerName: new FormControl('',  Validators.required),
      seriousDangerLocation: new FormControl('', Validators.required),
      seriousDangerElement: new FormControl('', Validators.required),
      seriousDangerMeasure: new FormControl('', Validators.required),
      seriousDangerStatus: new FormControl('', Validators.required),
      seriousDangerCycle: new FormControl('', Validators.required),
      seriousDangerPrincipal: new FormControl('', Validators.required),
      seriousDangerTime: new FormControl('', Validators.required),
      seriousDangerPicture: new FormControl('', Validators.required),
    });
  }

  // 选择图片
  public  selectImageFile(e): void {
      this.addDiscern.patchValue({seriousDangerPicture: e});
  }
}
