import { Component,  Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {History} from "../../interfaces/history.interface";


@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
})
export class CurrencyConvertorComponent implements OnInit {

  history: string = (localStorage.getItem("Results-History") as string);

  transactions: History[] = JSON.parse( this.history ) as History[];
  constructor(private route: ActivatedRoute) { }


  @Input() title = ''

  currentCurrencyPath!: string
  showHostrical = false

  amount = 1;
  fromOption= 'EUR';
  toOption = 'USD';
  ngOnInit() {
    this.route.url.subscribe((url)=>{



    if (url[0].path == 'details') {
      this.showHostrical = true
    }
    else {
      this.showHostrical = false
    }

        // console.log(params)
        this.currentCurrencyPath = url[1]?.path;
        this.title = this.currentCurrencyPath;
    });
    setInterval(()=>{
      console.log(this.showHostrical)
    },2000)
  }

  onConversion(){
    this.history = localStorage.getItem("Results-History") as string;
    this.transactions = JSON.parse( this.history ) as History[];
  }

  onFromChanged(value: string){
    console.log(value)
    this.fromOption = value;
  }
  onToChanged(value: string){
    this.toOption = value;
  }


}
