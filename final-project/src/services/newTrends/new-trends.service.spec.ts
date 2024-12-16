import { TestBed } from '@angular/core/testing';

import { NewTrendsService } from './new-trends.service';

describe('NewTrendsService', () => {
  let service: NewTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
