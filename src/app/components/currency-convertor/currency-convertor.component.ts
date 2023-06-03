import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-currency-convertor',
  templateUrl: './currency-convertor.component.html',
})
export class CurrencyConvertorComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @Input() title: any = ''
  currentCurrencyPath!: string

  amount: number = 1;

  ngOnInit() {
    this.route.url.subscribe(params =>

      this.currentCurrencyPath = params[1]['path']
    )
  }


  onChange() {
    console.log(this.amount);

  }

}
