import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { AboutService } from './about.service';

describe('AboutService', () => {
  let service: AboutService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AboutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
