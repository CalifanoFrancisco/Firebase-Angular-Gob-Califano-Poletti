import { TestBed } from '@angular/core/testing';

import { SeriesTiempoService } from './series-tiempo.service';

describe('SeriesTiempoService', () => {
  let service: SeriesTiempoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeriesTiempoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
