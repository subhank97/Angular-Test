import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api/api.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {  
  currencyData: any;

  constructor(private api: ApiService){}

  ngOnInit(): void {
    this.getCurrency()
  }

  getCurrency(){
    this.api.getCurrencyData()
    .subscribe(res =>{
      // console.log(res)
      this.currencyData = res
    })
  }

  roundedPrice(price: GLfloat){
    let newPrice = Math.round((price + Number.EPSILON) * 100) / 100 
    return newPrice
  }

}
