import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
import { ExchangerComponent } from './components/exchanger/exchanger.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import {PrimengModule} from "./modules/prime-ng-module/primeng.module";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      BodyComponent,
      CurrencyConvertorComponent,
      ExchangerComponent
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
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
