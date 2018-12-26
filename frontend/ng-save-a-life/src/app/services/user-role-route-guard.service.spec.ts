import { TestBed, inject } from '@angular/core/testing';

import { UserRoleRouteGuardService } from './user-role-route-guard.service';

describe('UserRoleRouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserRoleRouteGuardService]
    });
  });

  it('should be created', inject([UserRoleRouteGuardService], (service: UserRoleRouteGuardService) => {
    expect(service).toBeTruthy();
  }));
});
