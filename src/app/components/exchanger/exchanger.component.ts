import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from "../../services/api-calling.service"
import Currency from "../../interfaces/currencyApi"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
})
export class ExchangerComponent implements OnInit {
  fromVal: string = '14'
  selectedFromCurrency: string = ''
  toVal: string= '15'
  dataApi?: Currency;
  rates!: Array<string>;
  currentCurrecyPath!: String

  countries?: any;
  selectedCity?: any;

  onSwap( fromVal: string, toVal: string) {
    this.fromVal = toVal;
    this.toVal = fromVal;

    console.log(`From ${this.fromVal} and To ${this.toVal}`);

  }

  constructor(private apis: ApiCallingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    let dataA =  this.apis.getData().subscribe(data => {
      this.dataApi = (data as Currency)
      this.rates = Object.keys(this.dataApi['rates'])
      console.log(this.rates)

    })


    this.route.url.subscribe(params => {
      this.currentCurrecyPath = params[1]['path']

    })
  }



}
