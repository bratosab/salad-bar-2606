import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { saladGuardGuard } from './salad-guard-guard';

describe('saladGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => saladGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
