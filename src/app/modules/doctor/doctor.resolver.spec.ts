import { TestBed } from '@angular/core/testing';

import { DoctorResolver } from './doctor.resolver';

describe('DoctorResolver', () => {
  let resolver: DoctorResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(DoctorResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
