import { TestBed } from '@angular/core/testing';

import { OfficeResolver } from './office.resolver';

describe('OfficeResolver', () => {
  let resolver: OfficeResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OfficeResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
