import { TestBed } from '@angular/core/testing';

import { AlcoholLevelService } from './alcohol-level.service';

describe('AlcoholLevelService', () => {
  let service: AlcoholLevelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlcoholLevelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
