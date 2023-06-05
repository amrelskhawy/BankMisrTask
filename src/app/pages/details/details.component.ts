import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ApiCallingService} from "../../services/api-calling.service";
import SymbolInterface from "../../interfaces/Symbol.interface";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  currency?: string
  currencySymbol?: string
  symbols?: SymbolInterface

  currencyTitle = ''

  constructor(private route: ActivatedRoute, private Api: ApiCallingService) {
  }

  ngOnInit() {

    this.route.url.subscribe(data => this.currency = data[1].path )

    this.Api.getSymbols().subscribe(data => {
        this.symbols = data as SymbolInterface
        this.currencyTitle = `${this.symbols.symbols[this.currency as string]['code']}  ${this.symbols.symbols[this.currency as string]['description']}`
      }

    )

  }


}
