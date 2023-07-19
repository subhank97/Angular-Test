import { Component } from '@angular/core';
import { AuthorizationService } from '../services/authorization/authorization.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private auth: AuthorizationService) {}

  logout(){
    //  console.log("logout clicked")
     this.auth.logout()
}

}
