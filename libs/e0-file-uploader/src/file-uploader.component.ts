import { Component, Input, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'file-uploader',
  template: `
    <form class="box" fileUploadEntry method="post" action=""
          enctype="multipart/form-data">
      <div class="box__input">
        <input class="box__file"
               type="file"
               name="files[]"
               id="file"
               data-multiple-caption="{count} files selected"
               multiple/>
        <label for="file">
          <strong>Choose a file</strong>
          <span class="box__dragndrop">&nbsp;or drag it here</span>.
        </label>
        <button class="box__button" type="submit">Upload</button>
      </div>
      <div class="box__uploading">Uploading&hellip;</div>
      <div class="box__success">Done!</div>
      <div class="box__error">Error!<span></span>.</div>
    </form>
    <canvas [fileUploadOutlet]="data"></canvas>
  `,
  styleUrls: ['file-uploader.component.css'],
})
export class FileUploaderComponent implements OnInit {
  @Input() data: any;

  public ngOnInit(): void {

  }
}
