import {Component, EventEmitter, Output, OnInit, Input} from '@angular/core';
import { ApiCallingService } from "../../services/api-calling.service"
import Currency from "../../interfaces/currencyApi"
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-exchanger',
  templateUrl: './exchanger.component.html',
})
export class ExchangerComponent implements OnInit {
  dataApi?: Currency;
  rates?: Array<string>;
  currentCurrencyPath!: String

  selected?: any;
  testedRates: {[key:string]: number} = {
    "AED": 3.940386,
    "AFN": 93.541754,
    "ALL": 108.473403,
    "AMD": 415.410195,
    "ANG": 1.933786,
    "AOA": 638.728785,
    "ARS": 258.205059,
    "AUD": 1.621023,
    "AWG": 1.933723,
    "AZN": 1.822779,
    "BAM": 1.948961,
    "BBD": 2.166398,
    "BDT": 115.106083,
    "BGN": 1.948951,
    "BHD": 0.404427,
    "BIF": 3028.173893,
    "BMD": 1.0728,
    "BND": 1.442837,
    "BOB": 7.414053,
    "BRL": 5.322267,
    "BSD": 1.072935,
    "BTC": 3.9808559e-5,
    "BTN": 88.277849,
    "BWP": 14.657565,
    "BYN": 2.708795,
    "BYR": 21026.888949,
    "BZD": 2.162811,
    "CAD": 1.441533,
    "CDF": 2501.770125,
    "CHF": 0.974489,
    "CLF": 0.031141,
    "CLP": 859.281053,
    "CNY": 7.599935,
    "COP": 4692.375557,
    "CRC": 578.176521,
    "CUC": 1.0728,
    "CUP": 28.429212,
    "CVE": 109.885938,
    "CZK": 23.630609,
    "DJF": 191.039627,
    "DKK": 7.448271,
    "DOP": 58.656357,
    "DZD": 146.320882,
    "EGP": 33.148672,
    "ERN": 16.092007,
    "ETB": 58.602406,
    "EUR": 1,
    "FJD": 2.398997,
    "FKP": 0.855805,
    "GBP": 0.858401,
    "GEL": 2.794626,
    "GGP": 0.855805,
    "GHS": 11.964128,
    "GIP": 0.855805,
    "GMD": 63.906923,
    "GNF": 9223.633525,
    "GTQ": 8.401518,
    "GYD": 226.942104,
    "HKD": 8.40809,
    "HNL": 26.375446,
    "HRK": 7.449892,
    "HTG": 150.751003,
    "HUF": 370.662981,
    "IDR": 15933.822421,
    "ILS": 4.01885,
    "IMP": 0.855805,
    "INR": 88.373546,
    "IQD": 1404.471596,
    "IRR": 45379.459898,
    "ISK": 150.502886,
    "JEP": 0.855805,
    "JMD": 165.947676,
    "JOD": 0.760933,
    "JPY": 149.688942,
    "KES": 148.907607,
    "KGS": 93.966553,
    "KHR": 4418.495144,
    "KMF": 494.93638,
    "KPW": 965.479074,
    "KRW": 1400.369232,
    "KWD": 0.329972,
    "KYD": 0.894162,
    "KZT": 481.530271,
    "LAK": 19301.449571,
    "LBP": 16105.235551,
    "LKR": 311.407247,
    "LRD": 181.437345,
    "LSL": 21.144529,
    "LTL": 3.167701,
    "LVL": 0.648926,
    "LYD": 5.183882,
    "MAD": 10.892677,
    "MDL": 19.039897,
    "MGA": 4727.455045,
    "MKD": 61.394562,
    "MMK": 2253.193363,
    "MNT": 3728.503835,
    "MOP": 8.662307,
    "MRO": 382.989578,
    "MUR": 48.801407,
    "MVR": 16.409336,
    "MWK": 1097.190778,
    "MXN": 18.762014,
    "MYR": 4.910742,
    "MZN": 67.854725,
    "NAD": 21.155316,
    "NGN": 495.011713,
    "NIO": 39.242296,
    "NOK": 11.825023,
    "NPR": 141.244678,
    "NZD": 1.765599,
    "OMR": 0.413038,
    "PAB": 1.072945,
    "PEN": 3.953726,
    "PGK": 3.856467,
    "PHP": 60.04521,
    "PKR": 306.437386,
    "PLN": 4.49881,
    "PYG": 7768.030988,
    "QAR": 3.906111,
    "RON": 4.963739,
    "RSD": 117.235354,
    "RUB": 87.439714,
    "RWF": 1212.445431,
    "SAR": 4.02377,
    "SBD": 8.940898,
    "SCR": 15.050954,
    "SDG": 644.753163,
    "SEK": 11.561088,
    "SGD": 1.446119,
    "SHP": 1.30533,
    "SLE": 24.235311,
    "SLL": 21187.809026,
    "SOS": 609.888814,
    "SRD": 40.58188,
    "STD": 22204.803475,
    "SVC": 9.388405,
    "SYP": 2695.357635,
    "SZL": 20.84884,
    "THB": 37.258893,
    "TJS": 11.716685,
    "TMT": 3.754802,
    "TND": 3.315759,
    "TOP": 2.545058,
    "TRY": 22.4082,
    "TTD": 7.27753,
    "TWD": 32.924136,
    "TZS": 2540.391646,
    "UAH": 39.628142,
    "UGX": 4012.918345,
    "USD": 1.0728,
    "UYU": 41.624518,
    "UZS": 12260.975248,
    "VEF": 2808956.239322,
    "VES": 28.033561,
    "VND": 25192.036721,
    "VUV": 129.880899,
    "WST": 2.937418,
    "XAF": 653.669315,
    "XAG": 0.045241,
    "XAU": 0.000546,
    "XCD": 2.899297,
    "XDR": 0.805772,
    "XOF": 653.672351,
    "XPF": 120.365728,
    "YER": 268.575298,
    "ZAR": 20.914481,
    "ZMK": 9656.489655,
    "ZMW": 21.147987,
    "ZWL": 345.441309
  }
  Rates: any = Object.keys(this.testedRates)

  rate?: string = ''
  fromOption: string = 'EUR'
  toOption: string = 'USD'

  result?: any

  @Input() amount?: number

  onSwap( fromVal: string, toVal: string) {
    this.fromOption = toVal;
    this.toOption = fromVal;

    this.convertFunc()

  }

  convertFunc() {
    this.apis.convert(this.fromOption,this.toOption, ( this.amount as number )).subscribe(data =>{
      this.dataApi = (data as Currency)
      this.result = this.dataApi.result
    })
  }

  constructor(private apis: ApiCallingService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // let dataA =  this.apis.getData().subscribe(data => {
    //   this.dataApi = (data as Currency)
    //   this.rates = Object.keys(this.dataApi['rates'])
    //   console.log(this.rates)

    // })


    this.route.url.subscribe(params => {
      if( params.length > 1)  this.currentCurrencyPath = params[1]['path']

    })
  }

  onChange(e: any) {
    console.log(e);

  }



}
