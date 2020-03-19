import { TestBed } from '@angular/core/testing';

import { NewProductCanDeactivateService } from './new-product-can-deactivate.service';

describe('NewProductCanDeactivateService', () => {
  let service: NewProductCanDeactivateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewProductCanDeactivateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
