/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { ApiCallingService } from './api-calling.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('ApiCallingService', () => {
  let service: ApiCallingService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiCallingService]
    });
    service = TestBed.inject(ApiCallingService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should make a GET request to the API with the correct query parameters', () => {
    const fromCurrency = 'USD';
    const toCurrency = 'EUR';
    const amount = 100;

    const responseMock = { result: 80 };

    service.convert(fromCurrency, toCurrency, amount).subscribe(result => {
      expect(result).toEqual(responseMock);
    });

    const request = httpMock.expectOne(`${service.url}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
    expect(request.request.method).toBe('GET');
    request.flush(responseMock);
  });

  it('should handle errors from the API', () => {
    const fromCurrency = 'USD';
    const toCurrency = 'EUR';
    const amount = 100;

    const errorResponse = { status: 404, statusText: 'Not Found' };

    service.convert(fromCurrency, toCurrency, amount).subscribe(
      result => fail('Expected an error, but got a result instead'),
      error => {
        expect(error.status).toEqual(errorResponse.status);
        expect(error.statusText).toEqual(errorResponse.statusText);
      }
    );

    const request = httpMock.expectOne(`${service.url}/convert?from=${fromCurrency}&to=${toCurrency}&amount=${amount}`);
    expect(request.request.method).toBe('GET');
    request.flush(null, errorResponse);
  });
});
