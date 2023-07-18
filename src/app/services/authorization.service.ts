import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor() { }

  login(username: string, password: string){
    if (username === "test" && password === "123"){
      return 200
    }
    return 401
  }
}
