import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { CurrencyConvertorComponent } from './components/currency-convertor/currency-convertor.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { PrimengModule } from "./modules/primeng.module";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { ButtonModule } from "primeng/button";
import { NgOptimizedImage } from "@angular/common";
import { HomeComponent } from './pages/home/home.component';
import { ExchangerComponent } from './components/exchanger/exchanger.component';
import { DetailsComponent } from './pages/details/details.component';
import { TestComponent } from './pages/test/test.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrencyConvertorComponent,
    ExchangerComponent,
    DetailsComponent,
    HomeComponent,
    TestComponent,
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
