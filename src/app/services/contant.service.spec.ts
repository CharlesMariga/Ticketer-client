import { TestBed } from '@angular/core/testing';

import { ConstantService } from './constant.service';

describe('ContantService', () => {
  let service: ConstantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConstantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
