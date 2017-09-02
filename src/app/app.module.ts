import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FileUploaderReducer, FileUploaderModule } from '@booster-pack/e0-file-uploader';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FileUploaderModule.forRoot(),
    StoreModule.forRoot({ fileUploader: FileUploaderReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
