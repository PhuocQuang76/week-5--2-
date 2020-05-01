import { TestBed } from '@angular/core/testing';

import { AddressProviderService } from './address-provider.service';

describe('AddressProvider.Service', () => {
  let service: AddressProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
