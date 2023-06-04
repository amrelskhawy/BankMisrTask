import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  url: string = "https://api.exchangerate.host/"

  constructor(private http: HttpClient) { }

  getSymbols() {
    return this.http.get(`${this.url}/symbols` )
  }

  convert(fromCurrency: string, toCurrency: string, amount: number) {
    return this.http.get(`${this.url}/convert`, {
      params: {
        "from": fromCurrency,
        "to": toCurrency,
        "amount": amount
      }
    })
  }
}
