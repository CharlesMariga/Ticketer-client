import { TestBed } from '@angular/core/testing';

import { ContantService } from './constant.service';

describe('ContantService', () => {
  let service: ContantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
