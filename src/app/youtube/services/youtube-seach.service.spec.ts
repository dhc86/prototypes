/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { YoutubeSeachService } from './youtube-seach.service';

describe('Service: YoutubeSeach', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubeSeachService]
    });
  });

  it('should ...', inject([YoutubeSeachService], (service: YoutubeSeachService) => {
    expect(service).toBeTruthy();
  }));
});
