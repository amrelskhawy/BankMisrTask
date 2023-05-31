import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiCallingService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('http://data.fixer.io/api/latest', {
      params: {
        "access_key": "21fed24816b738644b1434a85eb6dc51"
      }
    })
  }
}
