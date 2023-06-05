import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from "./navbar/navbar.component";
import {HomeComponent} from "../pages/home/home.component";
import {DetailsComponent} from "../pages/details/details.component";
import {CurrencyConvertorComponent} from "./currency-convertor/currency-convertor.component";
import {ExchangerComponent} from "./exchanger/exchanger.component";
import { FormsModule } from '@angular/forms';
import { NgOptimizedImage } from "@angular/common";
import {MatSelectModule} from "@angular/material/select";
import {MatButtonModule} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {HistoricalChartComponent} from "./historical-chart/historical-chart.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgOptimizedImage,
    MatSelectModule,
    MatButtonModule,
    RouterLink,
    MatProgressSpinnerModule
  ],
  declarations: [
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    CurrencyConvertorComponent,
    ExchangerComponent,
    HistoricalChartComponent
  ],
  exports: [
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    CurrencyConvertorComponent,
    ExchangerComponent,
    FormsModule,
    NgOptimizedImage,
    HistoricalChartComponent
  ]
})
export class MyComponentsModule { }
