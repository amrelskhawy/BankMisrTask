import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {History} from "../../interfaces/history.interface";


@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
})
export class CurrencyConvertorComponent implements OnInit {

  history: any = localStorage.getItem("Results-History");

  transactions: History[] = JSON.parse( this.history ) as History[];
  constructor(private route: ActivatedRoute) { }


  @Input() title: any = ''

  currentCurrencyPath!: string

  amount: number = 1;
  fromOption: string = 'EUR';
  toOption: string = 'USD';
  ngOnInit() {
    this.route.url.subscribe(params =>{
        this.currentCurrencyPath = params[1]['path'];
        this.title = this.currentCurrencyPath;
    }

    )


  }

  onConversion(){
    this.history = localStorage.getItem("Results-History");
    this.transactions = JSON.parse( this.history ) as History[];
  }

  onFromChanged(value: string){
    console.log(value)
    this.fromOption = value;
  }
  onToChanged(value: string){
    this.toOption = value;
  }


  onChange() {
    console.log(this.amount);

  }

}
