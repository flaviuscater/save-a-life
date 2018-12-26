import { TestBed, inject } from '@angular/core/testing';

import { AdminRoleRouteGuardService } from './admin-role-route-guard.service';

describe('AdminRoleRouteGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminRoleRouteGuardService]
    });
  });

  it('should be created', inject([AdminRoleRouteGuardService], (service: AdminRoleRouteGuardService) => {
    expect(service).toBeTruthy();
  }));
});
