import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { Router} from "@angular/router";
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public auth: AuthService,
              private router:Router  ) {}

  
ngOnInit(): void {
  }
  login(){
    this.auth.loginWithRedirect()
  }
  logaut(){
    this.auth.logout;

  }

}
