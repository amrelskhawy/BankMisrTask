import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
  styleUrls: ['./currency-convertor.style.css']
})
export class CurrencyConvertorComponent implements OnInit {

  constructor() { }


  amount: number = 1;

  ngOnInit() {

  }

  onChange() {
    console.log(this.amount);

  }

}
