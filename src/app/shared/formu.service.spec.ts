import { TestBed } from '@angular/core/testing';

import { FormuService } from './formu.service';

describe('FormuService', () => {
  let service: FormuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormuService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
