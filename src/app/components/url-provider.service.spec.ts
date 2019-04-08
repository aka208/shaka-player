import { TestBed } from '@angular/core/testing';

import { UrlProviderService } from './url-provider.service';

describe('UrlProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UrlProviderService = TestBed.get(UrlProviderService);
    expect(service).toBeTruthy();
  });
});
