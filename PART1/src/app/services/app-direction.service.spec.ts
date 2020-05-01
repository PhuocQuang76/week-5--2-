import { TestBed } from '@angular/core/testing';

import { AppDirectionService } from './app-direction.service';

describe('AppDirectionService', () => {
  let service: AppDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
