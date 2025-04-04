import { TestBed } from '@angular/core/testing';

import { RestoDataService } from './resto-data.service';

describe('RestoDataService', () => {
  let service: RestoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
