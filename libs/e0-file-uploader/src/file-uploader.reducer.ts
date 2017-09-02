import * as FileUploadActions from './file-uploader.actions';

export type Action = FileUploadActions.All;


export function FileUploaderReducer(state = undefined, action: Action): DataTransfer|undefined {
  switch (action.type) {
    case FileUploadActions.UPLOAD: {
      return action.payload;
    }

    default: {
      return state;
    }
  }
}
