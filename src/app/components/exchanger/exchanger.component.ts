import { Component, OnInit } from '@angular/core';
import { ApiCallingService } from "../../services/api-calling.service"
import Currency from 'src/interfaces/currencyApi';
@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
})
export class ExchangerComponent implements OnInit {

  fromVal: string = 'EUR'
  toVal: string= 'USD'
  dataApi: any;
  rates!: any;

  onSwap(toVal: string, fromVal: string) {
    this.fromVal = toVal;
    this.toVal = fromVal;
  }
  constructor(private apis: ApiCallingService) { }

  ngOnInit() {
    let dataA =  this.apis.getData().subscribe(data => {
      this.dataApi = data
      this.rates = Object.keys(this.dataApi['rates'])
      console.log(typeof(this.rates));

    })
  }



}
