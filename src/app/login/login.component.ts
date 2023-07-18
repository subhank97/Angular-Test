import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private auth: AuthorizationService, private router: Router) {}

  login(){
    // console.log("login clicked")
    let response = this.auth.login(this.username, this.password)
    if (response === 200){
      this.router.navigate(['home'])
    }
    if (response === 401){
      console.log("Invalid input")
    }
  }

}
