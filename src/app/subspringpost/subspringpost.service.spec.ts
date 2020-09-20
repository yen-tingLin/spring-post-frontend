import { TestBed } from '@angular/core/testing';

import { SubspringpostService } from './subspringpost.service';

describe('SubspringpostService', () => {
  let service: SubspringpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubspringpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
