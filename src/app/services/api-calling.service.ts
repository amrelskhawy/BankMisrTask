import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  url = "https://api.exchangerate.host/"

  constructor(private http: HttpClient) { }

  getSymbols() {
    return this.http.get(`${this.url}/symbols` )
  }

  getMonthlyHistoricalRatesForYear(baseCurrency: string, targetCurrency: string): Observable<any> {
    const endDate = new Date().toISOString().slice(0, 10); // today's date
    const startDate = new Date();
    startDate.setFullYear(startDate.getFullYear() - 1); // 1 year ago
    startDate.setDate(1); // first day of the month
    const startDateString = startDate.toISOString().slice(0, 10);

    const url = `${this.url}timeseries?start_date=${startDateString}&end_date=${endDate}&base=${baseCurrency}&symbols=${targetCurrency}`;

    return this.http.get(url);
  }

  extractMonthlyRates(data: any) {
    let monthlyRates: any;
    const targetCurrency = ''

    const rates = data.rates;
    const rateKeys = Object.keys(rates);

    for (let i = 0; i < rateKeys.length; i++) {
      const date = new Date(rateKeys[i]);
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const key = year + '-' + month.toString().padStart(2, '0');

      if (!monthlyRates[key]) {
        monthlyRates[key] = [];
      }

      const rate = rates[rateKeys[i]][targetCurrency];
      monthlyRates[key].push(rate);
    }

    // console.log( monthlyRates);
    return monthlyRates;
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
