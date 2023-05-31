import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { BodyComponent } from './components/body/body.component';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
import { InputComponent } from './components/input/input.component';
import { ExchangerComponent } from './components/exchanger/exchanger.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'

@NgModule({
  declarations: [
    AppComponent,
      NavbarComponent,
      BodyComponent,
      CurrencyConvertorComponent,
      InputComponent,
      ExchangerComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
