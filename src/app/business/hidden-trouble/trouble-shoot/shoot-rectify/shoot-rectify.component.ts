import {Component, OnInit, ViewChild} from '@angular/core';
import {UploadImageComponent} from '../../../../common/components/upload-image/upload-image.component';
import {Es} from '../../../../common/public/contents';

@Component({
  selector: 'app-shoot-rectify',
  templateUrl: './shoot-rectify.component.html',
  styleUrls: ['./shoot-rectify.component.scss']
})
export class ShootRectifyComponent implements OnInit {

  // @ts-ignore
  @ViewChild('upimg') ImageClear: UploadImageComponent;
  public ImageOption = {
    files: [],
    showUploadIcon: true
  };
  public isHandle = false;
  // @ts-ignore
  public imageFiles: any[] = []; // 图片列表
  // public fileList: any[] = []; // 文件列表
  public filename: any;
  public filename1: any;
  constructor() { }
  public esDate: any;

  ngOnInit() {
    this.esDate = Es;
    // console.log(this.esDate);
  }

  public  selectFile(e): void {
    this.imageFiles = e;
    console.log(this.imageFiles);
  }

  public submitClcik(): void {
    this.ImageClear.clearImage();
  }

  public  SelectFile(e, name): void {
    if (name === 'filename'){
      console.log(e.target.files[0].name);
      this.filename = e.target.files[0].name;
    }else {
      console.log(e.target.files[0].name);
      this.filename1 = e.target.files[0].name;
    }
  }

  public  selectHandleType(e): void {
    console.log(e);
    this.isHandle = e === 1;
  }
}
