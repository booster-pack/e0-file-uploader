import { TestBed } from '@angular/core/testing';

import { FileUploaderModule } from './index';
import { FileUploaderService } from './file-uploader.service';

/**
 * REFERENCE:
 * https://medium.com/spektrakel-blog/angular-testing-snippets-ngmodule-providers-b8e9559587e7
 */
describe(FileUploaderModule.name, () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FileUploaderModule ]
    });
  });

  it(`should not provide 'CustomHttp' service`, () => {
    expect(() => TestBed.get(FileUploaderService))
        .toThrowError(/No provider for/);
  });
});

describe(`FeatureModule.forRoot()`, () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FileUploaderModule.forRoot()
      ]
    });
  });

  it(`should provide services`, () => {
    expect(TestBed.get(FileUploaderService)).toBeTruthy();
  });
});
