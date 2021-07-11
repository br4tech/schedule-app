import { TestBed } from '@angular/core/testing';

import { OffDayResolver } from './off-day.resolver';

describe('OffDayResolver', () => {
  let resolver: OffDayResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OffDayResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
