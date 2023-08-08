import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterState, CanActivate } from "@angular/router";
import { AuthService } from '@auth0/auth0-angular';


@Injectable({
  providedIn: 'root'
})
export class AuthguardService implements CanActivateFn{

  constructor(private auth:AuthService,
              private router:Router) { }

 CanActivate(next:ActivatedRouteSnapshot,state:RouterState){
  if(this.auth.isAuthenticated$.subscribe(isAuthenticaded =>{
    if(isAuthenticaded){
      console.log("El guard Paso")
    }else{
      console.log("Se bloqueo el guard mano")
      this.router.navigate(['home'])
    }
  })){
  
  }
 }          
}
