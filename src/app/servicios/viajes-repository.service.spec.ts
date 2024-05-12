import { TestBed } from '@angular/core/testing';

import { ViajesRepositoryService } from './viajes-repository.service';

describe('ViajesRepositoryService', () => {
  let service: ViajesRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViajesRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
