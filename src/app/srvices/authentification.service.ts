import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8080/utilisateurs";
  url2="http://localhost:8080/utilisateurs/search/"

  authentification: boolean = true //variable de type boolean qui indique si l'user est authentifié ou pas isAuthenticated
  userAuthentifié: any //enregistrer l'user qui s'est authentifié useruthentiated
  utilisateurs=new Array; //le tableau qui pour stocker les utilisateurs 
  admin:boolean=false;
  getUtilisateurs(){
    return this.http.get(this.url)
    
  }
  public loginService(email: string, password: string,utilisateurs:any) {

    this.utilisateurs=utilisateurs
    let loginOn

    this.utilisateurs.forEach((l) => {
      // console.log(l,l.mail,l.password);
      if (l.mail == email && l.password == password) {
        loginOn = l
        console.log('loginOn',loginOn)
      }
    })
    if (loginOn) {
      this.authentification = true //l'user est authentifié
      this.userAuthentifié = loginOn // on enregistre que l'user est authentifié
      this.User()
      this.Admin()
      console.log('admin',this.admin)
    } else {
      this.authentification = false //l'user n'est pas authentifié
      this.userAuthentifié = undefined //dans le cas où l'user est déjà authentifié
    }
  }

  public User() {
    console.log("je suis dans la methode user")
    //méthode pour l'authentification de l'administrateur
    if (this.userAuthentifié) {
      // on voit d'abord si l'user est autentifié
      if (this.userAuthentifié.role=='user')
        //pour chercher une chaine dans un tableau on peut utiliser directement indexOf
        // et il nous retourne la position à laquelle se trouve cette chaîne
        //si elle est >-1 ca veut dire que ça existe
        this.admin=false
        return true
    }
    return false
  }

  public Admin() {
    console.log("je suis dans la methode admin")
    //méthode pour l'authentification de l'administrateur
    if (this.userAuthentifié) {
      // on voit d'abord si l'user est autentifié
      if (this.userAuthentifié.role=='admin')
        //pour chercher une chaine dans un tableau on peut utiliser directement indexOf
        // et il nous retourne la position à laquelle se trouve cette chaîne
        //si elle est >-1 ca veut dire que ça existe
        this.admin=true
        localStorage.setItem('admin',String(this.admin));
        console.log('admin',this.admin)
        return true
    }
    return false
  }

  public SaveUserLocalStorage() {
    if (this.userAuthentifié) {
      localStorage.setItem(
        'saveUser',
        btoa(JSON.stringify(this.userAuthentifié)),
      ) // btoa sert pour l'encodage
      // du username et mot de passe qui seront stokés dans le localstorage= encodage en base 64 url
      // pour l'enregistrer en localstorage apres je vais enregistrer un item que je vais
      // appeler 'saveUser' je dois lui dire quoi il doit enregistrer donc userAuthentifié
      // mais normalment je n'enregistre pas l'utilisateur avec son mot de passe mais le token
    }
  }

  public getLoadUserLocalStorage() {
    let titi = localStorage.getItem('saveUser')
    if (titi) {
      let user = JSON.parse(atob(titi))
      this.userAuthentifié = { email: user.email, role: user.role }
      this.authentification = true
      let admin=localStorage.getItem('admin')
    }
  }

  public removeLocalStorage() {
    localStorage.removeItem('saveUser')
    this.authentification = false
    this.userAuthentifié = undefined
    this.admin=false
    localStorage.removeItem('admin');
  }

  public addUser(utilisateur:any){
    return this.http.post(this.url,utilisateur)
  }
 
  searchUser(mail:any){
    return this.http.get(this.url2+"byMail?"+mail)
  }



}
