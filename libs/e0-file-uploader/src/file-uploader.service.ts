import { Injectable } from '@angular/core';


@Injectable()
export class FileUploaderService {

  constructor() {

  }

  public getBase64(item): Promise<any> {
    const target: any = item;

    return new Promise((resolve, reject) => {
      if (target && target.files.length) {
        const file = target.files[0];

        if (file.type.indexOf('image') !== -1) {
          const reader = new FileReader();

          reader.onload = (event) => {
            const readTarget: any = event.target
            resolve(readTarget.result);
          };

          reader.onerror = (event) => {
            let message = `${event} not today dogg`;
            reject(new Error(message));
          };
          reader.readAsDataURL(file);
        }
      }
    })
  }
  //   let finalTarget: any;
  //
  //   if (target && target.files.length) {
  //     const file = target.files[0];
  //
  //     if (file.type.indexOf('image') !== -1) {
  //       const reader = new FileReader();
  //
  //       reader.onload = (event) => {
  //         finalTarget = event.target;
  //       };
  //
  //       reader.readAsDataURL(file);
  //     }
  //   }
  //
  //   return finalTarget;
  // }
}
