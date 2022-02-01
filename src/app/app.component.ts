import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from './srvices/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'eCommerceArghilla';
  constructor(public authentificationService:AuthentificationService,private router:Router) {
  }
  ngOnInit(): void {
   
    this.authentificationService.getLoadUserLocalStorage()
}
LogOut() {
 this.authentificationService.removeLocalStorage()
 this.router.navigateByUrl('authentification')
}




  
}
