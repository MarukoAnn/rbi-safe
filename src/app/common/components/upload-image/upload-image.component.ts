import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {DialogService} from 'primeng/api';

interface ImageOption {
  files: any[];
  showUploadIcon: boolean;
}

@Component({
  selector: 'app-upload-image',
  templateUrl: './upload-image.component.html',
  styleUrls: ['./upload-image.component.scss']
})

export class UploadImageComponent implements OnInit, OnChanges{

  @Output()
  public selectFile = new EventEmitter<any>(); // 选择图片后发射的数据
  @Input()
  public ImageOption: ImageOption = {
    files: [],
    showUploadIcon: true
  };
  public filePath = [];
  public showImageDiaog: boolean;
  public ImgUrl: any;
  constructor(
  ) { }

  ngOnInit() {
  }
  public  selectImage(e): void {
    this.filePath = [];
    for (let j = 0; j < e.target.files.length; j++){
      this.ImageOption.files.push(e.target.files[j]);
    }
    for (let i = 0; i < this.ImageOption.files.length; i++){
      const reader = new FileReader();
      reader.readAsDataURL(this.ImageOption.files[i]);
      reader.onload = (re) => {
        // console.log(re.target['result']);
        this.filePath.push(re.target['result']);
      };
    }
    this.selectFile.emit(this.ImageOption.files);
  }
  // 重置函数
  public clearImage(): void {
    this.ImageOption.files = this.filePath = [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.ImageOption.showUploadIcon !== true){
       this.filePath = this.ImageOption.files = [];
    }
  }
  public  imgClick(e): void {
    this.showImageDiaog = true;
    this.ImgUrl = e;
      // console.log(e);
  }
}

