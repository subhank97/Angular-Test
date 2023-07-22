import { Component } from '@angular/core';
import { ApiService } from '../services/api/api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent {
  coinData: any;

  constructor(private api: ApiService, private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id');
      if (id !== null) {
        this.getCoin(id);
      }
    });
  }
  
  getCoin(id: string){
    this.api.getCoinData(id)
    .subscribe(res =>{
      console.log(res)
      this.coinData = res
    });
  }

}
