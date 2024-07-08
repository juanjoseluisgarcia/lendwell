import { TestBed } from '@angular/core/testing';

import { RepaymentPeriodService } from './repayment-period.service';

describe('RepaymentPeriodService', () => {
  let service: RepaymentPeriodService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepaymentPeriodService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
