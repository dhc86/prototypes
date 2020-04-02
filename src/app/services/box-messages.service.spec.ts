import { TestBed } from '@angular/core/testing';

import { BoxMessagesService } from './box-messages.service';

describe('BoxMessagesService', () => {
  let service: BoxMessagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoxMessagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
