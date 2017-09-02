// counter.actions.ts
import { Action } from '@ngrx/store';


export const UPLOAD = '[Counter] Upload';

// export const CounterActions = new Set();
// CounterActions.add()

export class Upload implements Action {
  readonly type = UPLOAD;

  constructor(public payload: DataTransfer) {
  }
}


export type All = Upload;
