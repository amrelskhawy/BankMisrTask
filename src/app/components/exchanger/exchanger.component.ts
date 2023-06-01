import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from "../../services/api-calling.service"
import Currency from "../../../interfaces/currencyApi"

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
})
export class ExchangerComponent implements OnInit {
  fromVal: string = 'EUR'
  selectedFromCurrency: string = ''
  toVal: string= 'USD'
  dataApi?: Currency;
  rates!: Array<string>;

  countries?: any;
  selectedCity?: any;

  onSwap(toVal: string, fromVal: string) {
    this.fromVal = toVal;
    // this.toVal = fromVal;
  }
  constructor(private apis: ApiCallingService) { }

  ngOnInit() {
    let dataA =  this.apis.getData().subscribe(data => {
      this.dataApi = (data as Currency)
      this.rates = Object.keys(this.dataApi['rates'])
      console.log(this.rates)

    })

    this.countries = [
      {
        name: 'Australia',
        code: 'AU',
        states: [
          {
            name: 'New South Wales',
            cities: [
              { cname: 'Sydney', code: 'A-SY' },
              { cname: 'Newcastle', code: 'A-NE' },
              { cname: 'Wollongong', code: 'A-WO' }
            ]
          },
          {
            name: 'Queensland',
            cities: [
              { cname: 'Brisbane', code: 'A-BR' },
              { cname: 'Townsville', code: 'A-TO' }
            ]
          }
        ]
      },
      {
        name: 'Canada',
        code: 'CA',
        states: [
          {
            name: 'Quebec',
            cities: [
              { cname: 'Montreal', code: 'C-MO' },
              { cname: 'Quebec City', code: 'C-QU' }
            ]
          },
          {
            name: 'Ontario',
            cities: [
              { cname: 'Ottawa', code: 'C-OT' },
              { cname: 'Toronto', code: 'C-TO' }
            ]
          }
        ]
      },
      {
        name: 'United States',
        code: 'US',
        states: [
          {
            name: 'California',
            cities: [
              { cname: 'Los Angeles', code: 'US-LA' },
              { cname: 'San Diego', code: 'US-SD' },
              { cname: 'San Francisco', code: 'US-SF' }
            ]
          },
          {
            name: 'Florida',
            cities: [
              { cname: 'Jacksonville', code: 'US-JA' },
              { cname: 'Miami', code: 'US-MI' },
              { cname: 'Tampa', code: 'US-TA' },
              { cname: 'Orlando', code: 'US-OR' }
            ]
          },
          {
            name: 'Texas',
            cities: [
              { cname: 'Austin', code: 'US-AU' },
              { cname: 'Dallas', code: 'US-DA' },
              { cname: 'Houston', code: 'US-HO' }
            ]
          }
        ]
      }
    ];

  }



}
