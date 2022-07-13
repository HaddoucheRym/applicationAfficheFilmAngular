import { TestBed } from '@angular/core/testing';

import { FilmSerService } from './film-ser.service';

describe('FilmSerService', () => {
  let service: FilmSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
