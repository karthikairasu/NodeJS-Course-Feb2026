import { TestBed } from '@angular/core/testing';

import { Apidata } from './apidata';

describe('Apidata', () => {
  let service: Apidata;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Apidata);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
