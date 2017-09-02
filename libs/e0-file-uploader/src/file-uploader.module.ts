import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploaderService } from './file-uploader.service';
import { FileUploaderComponent } from './file-uploader.component';
import { FileUploaderEntryDirective } from './file-uploader-entry.directive';
import { FileUploaderOutletDirective } from './file-uploader-outlet.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    FileUploaderEntryDirective, FileUploaderComponent,
    FileUploaderOutletDirective,
  ],
  exports: [
    FileUploaderComponent, FileUploaderEntryDirective,
    FileUploaderOutletDirective,
  ],
})
export class FileUploaderModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FileUploaderModule,
      providers: [FileUploaderService],
    };
  }
}
