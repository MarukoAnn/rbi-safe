import { TestBed } from '@angular/core/testing';

import { TroubleShootService } from './trouble-shoot.service';

describe('TroubleShootService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TroubleShootService = TestBed.get(TroubleShootService);
    expect(service).toBeTruthy();
  });
});
