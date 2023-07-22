import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';


@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  coinData: any;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getCoin()
  }

  getCoin(){
    this.api.getCurrencyData()
    .subscribe(res =>{
      console.log(res)
      this.coinData = res
    })
  }

}
