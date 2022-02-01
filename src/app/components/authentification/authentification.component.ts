import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/srvices/authentification.service';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css']
})
export class AuthentificationComponent implements OnInit {
  utilisateurs:any;
  listeUsers:any;
  listeTrouve:any;
  constructor(private http:HttpClient, public authentificationService:AuthentificationService, private router: Router) { }

  ngOnInit(): void {
   
  }

  LoginTs(log: any) {
    console.log('log',log)
    this.authentificationService.getUtilisateurs().subscribe(data=>{ 
     console.log('data',data)
          this.utilisateurs=data
        
    console.log('this.utilisateurs',this.utilisateurs._embedded.utilisateurs)
    this.authentificationService.loginService(log.email, log.password,this.utilisateurs._embedded.utilisateurs)
    if (this.authentificationService.authentification) {
      this.authentificationService.SaveUserLocalStorage()
      //ici on rappelle la methode pour sauvegarder le user sur localstorage
     this.router.navigateByUrl('home')
    }
  })
  }

    addUser(user:any){
      let data=user.value;
      data.role='user'
      console.log ('data',data);
      console.log('test add user',data.mail,data.password,data.role)
      //verifier si l'utilisateur existe deja dans la BDD
      // this.authentificationService.searchUser(data.mail).subscribe(data=>{
      //   this.listeUsers = data;
      //   console.log (data)
      //   console.log(this.listeUsers._embedded.utilisateurs);
      //   this.listeTrouve = this.listeUsers._embedded.utilisateurs
      //   console.log(this.listeTrouve.length)
      //   if (this.listeTrouve.length > 0) {
      //     console.log("trouvé!")

      //   }
      //   else {
      //     console.log("nontrouvé!")
      this.authentificationService.addUser(data).subscribe(reponse=>{
            console.log("user ajouté avec succès !")
            this.router.navigateByUrl('home') 
      // })
         
      // }
      })
    
  }

      
  
}


