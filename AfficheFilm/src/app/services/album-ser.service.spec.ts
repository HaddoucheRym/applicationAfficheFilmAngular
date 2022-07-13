import { TestBed } from '@angular/core/testing';

import { AlbumSerService } from './album-ser.service';

describe('AlbumSerService', () => {
  let service: AlbumSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
