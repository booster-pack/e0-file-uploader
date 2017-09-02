import {
  Directive, ElementRef,
  Input, OnChanges,
  OnDestroy,
  OnInit, Renderer2,
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { FileUploaderService } from './file-uploader.service';


@Directive({
  selector: '[fileUploadOutlet]',
})
export class FileUploaderOutletDirective implements OnInit, OnDestroy,
  OnChanges {
  @Input('fileUploadOutlet') data: Observable<string>;

  constructor(private host: ElementRef,
              private render: Renderer2,
              private fileReader_: FileUploaderService) {
  }

  public ngOnInit(): void {
    const { nativeElement: canvas } = this.render.selectRootElement(this.host);
    const ctx = canvas.getContext('2d');
    const image = new Image();

    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };

    this.data.subscribe((item) => {
      this.fileReader_.getBase64(item).then((imageSrc) =>{
        image.src = imageSrc;
      });
    });


  }

  public ngOnChanges(): void {
    console.log(this.data, 'fileee');
  }

  public ngOnDestroy(): void {
  }
}
