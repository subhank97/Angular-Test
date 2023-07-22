import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCurrencyData(){
    return this.http.get<any>('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
  }

  getCoinData(id: string){
    return this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${id}?vs_currencies=usd`)
  }
  
}
