import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { QualificationService } from './qualification.service';

describe('QualificationService', () => {
  let service: QualificationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(QualificationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
