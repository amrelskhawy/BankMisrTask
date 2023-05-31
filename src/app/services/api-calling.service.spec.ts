/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiCallingService } from './api-calling.service';

describe('Service: ApiCalling', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiCallingService]
    });
  });

  it('should ...', inject([ApiCallingService], (service: ApiCallingService) => {
    expect(service).toBeTruthy();
  }));
});
