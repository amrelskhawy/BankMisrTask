import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
import { ExchangerComponent } from './components/exchanger/exchanger.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {PrimengModule} from "./modules/prime-ng-module/primeng.module";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import { DetailsComponent } from './src/app/pages/details/details.component';
import { HomeComponent } from './pages/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      CurrencyConvertorComponent,
      ExchangerComponent,
      DetailsComponent,
      HomeComponent,
   ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FontAwesomeModule,
        FormsModule,
        HttpClientModule,
        PrimengModule,
        InputNumberModule,
        CascadeSelectModule,
        ButtonModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
