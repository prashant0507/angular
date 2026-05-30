import { TestBed } from '@angular/core/testing';

import { LoaderAPI } from './loader-api';

describe('Loader', () => {
  let service: LoaderAPI;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoaderAPI);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
