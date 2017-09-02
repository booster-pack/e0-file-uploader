import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { FileUploaderState } from '@booster-pack/e0-file-uploader';
import { Observable } from 'rxjs/Observable';
import { AppState } from './app-state.interface';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public fileUploader: Observable<FileUploaderState>;

  constructor(private store: Store<AppState>) {
    this.fileUploader = store.select('fileUploader');
  }
}
