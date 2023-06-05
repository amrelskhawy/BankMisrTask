import { Component, Input, OnInit } from '@angular/core';
import Historical from "../../interfaces/Historical.interface";
import { ApiCallingService } from "../../services/api-calling.service"
import Chart from 'chart.js/auto';


interface RateInterface {
  rates: { [key: string]: number };
}


@Component({
  selector: 'app-historical-chart',
  templateUrl: './historical-chart.component.html',
})
export class HistoricalChartComponent implements OnInit {
  @Input() baseCurrency = ''
  @Input() toCurrency = ''
  months: Set<string> = new Set()
  historicalData!: Historical
  rates!: { [key: string]: number };
  monthsMap: any = {
    '01':'January',
    '02':'February',
    '03':'March',
    '04':'April',
    '05':'May',
    '06':'June',
    '07':'July',
    '08':'August',
    '09':'September',
    '10':'October',
    '11':'November',
    '12':'December'
  }
  chartCurrency = ''
  chartData: RateInterface[] = []
  historicalChart: any
  constructor(private api: ApiCallingService) { }

  ngOnInit() {
    this.getHistorical()

    const data:{year: number, count : number}[] = [
      { year: 2010, count: 10 },
      { year: 2011, count: 20 },
      { year: 2012, count: 15 },
      { year: 2013, count: 8 },
      { year: 2014, count: 22 },
      { year: 2015, count: 30 },
      { year: 2016, count: 28 },
    ];

    console.log(this.months)


    this.historicalChart = new Chart("myChart", {
      type: 'line',
      data: {
        labels: Object.values(this.monthsMap).map(month => month),
        datasets: [
          {
            label: `historical data for ${this.baseCurrency} to ${this.toCurrency}`,
            data: data.map(item => item.count)


          }
        ]
      }
      // data: {
      //   labels: data.map(item => item.year),
      //   datasets: [
      //     {
      //       label: `historical data for ${this.baseCurrency} to ${this.toCurrency}`,
      //       data:data.map(item => item.count)
      //
      //
      //     }
      //   ]
      // }
    })
  }

  getHistorical() {
    this.api.getMonthlyHistoricalRatesForYear(this.baseCurrency, this.toCurrency).subscribe(data => {
      this.rates = data.rates
      Object.entries(this.rates).map(item => {
        // Rates
        // console.log(Object.entries(this.rates).map(item => Object.entries(item[1])[0][1]))

      })
        this.months = new Set(Object.entries(this.rates).map((item) => {
          const month: string = item[0].slice(5,7).toString();
          return this.monthsMap[month];
        }))

    })

  }


}
