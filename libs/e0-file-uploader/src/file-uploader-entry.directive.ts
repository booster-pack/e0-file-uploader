import {
  Directive, HostBinding, HostListener, OnDestroy,
  OnInit, Output,
} from '@angular/core';

import { Store } from '@ngrx/store';
import * as FileActions from './file-uploader.actions';
import { FileUploaderState } from './file-uploader-state.interface';


@Directive({
  selector: '[fileUploadEntry]',
})
export class FileUploaderEntryDirective implements OnInit, OnDestroy {
  private readonly HOVER_ACTIVE = 'fu-pending';
  private readonly HOVER_INACTIVE = 'fu-idle';

  constructor(private store: Store<FileUploaderState>) {
  }

  @HostBinding('class') public isHovered = this.HOVER_INACTIVE;

  @HostListener('drag', ['$event'])
  @HostListener('dragend', ['$event'])
  @HostListener('dragstart', ['$event'])
  @HostListener('dragover', ['$event'])
  @HostListener('dragleave', ['$event'])
  @HostListener('dragenter', ['$event'])
  @HostListener('drop', ['$event'])
  private stopAndPrevent(event: DragEvent): void {
    event.preventDefault();
    event.stopPropagation();
  }

  @HostListener('dragover')
  @HostListener('dragenter')
  private onEnter(): void {
    this.isHovered = this.HOVER_ACTIVE;
  }

  @HostListener('dragleave')
  @HostListener('dragend')
  @HostListener('drop')
  private onLeave(): void {
    this.isHovered = this.HOVER_INACTIVE;
  }

  @HostListener('drop', ['$event'])
  private onDrop(event: DragEvent): void {
    this.store.dispatch(new FileActions.Upload(event.dataTransfer));
  }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
  }
}
