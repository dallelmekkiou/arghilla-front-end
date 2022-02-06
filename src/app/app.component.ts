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
  admin:any
  ngOnInit(): void {
 
    this.authentificationService.getLoadUserLocalStorage()
   
    console.log('admin de appcomponent.ts',this.authentificationService.admin)

}
LogOut() {
 this.authentificationService.removeLocalStorage()
 this.router.navigateByUrl('authentification')
}




  
}
