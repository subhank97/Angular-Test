import { Injectable } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router) {}

  login(username: string, password: string){
    if (username === "test" && password === "123"){
      return 200
    }
    return 401
  }

  logout(){
    this.router.navigate(['login'])
  }

}
