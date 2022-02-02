import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  constructor(private http:HttpClient) { }

  url="http://localhost:8099/utilisateurs";
  url2="http://localhost:8099/utilisateurs/search/"

  authentification: boolean = true //variable de type boolean qui indique si l'user est authentifié ou pas isAuthenticated
  userAuthentifié: any //enregistrer l'user qui s'est authentifié useruthentiated
  utilisateurs=new Array; //le tableau qui pour stocker les utilisateurs 

  getUtilisateurs(){
    return this.http.get(this.url)
    
  }
  public loginService(email: string, password: string,utilisateurs:any) {

    this.utilisateurs=utilisateurs
    let loginOn

    this.utilisateurs.forEach((l) => {
      console.log(l,l.mail,l.password);
      if (l.mail == email && l.password == password) {
        loginOn = l
        console.log('loginOn',loginOn)
      }
    })
    if (loginOn) {
      this.authentification = true //l'user est authentifié
      this.userAuthentifié = loginOn // on enregistre que l'user est authentifié
    } else {
      this.authentification = false //l'user n'est pas authentifié
      this.userAuthentifié = undefined //dans le cas où l'user est déjà authentifié
    }
  }

  public User() {
    //méthode pour l'authentification de l'administrateur
    if (this.userAuthentifié) {
      // on voit d'abord si l'user est autentifié
      if (this.userAuthentifié.role=='user')
        //pour chercher une chaine dans un tableau on peut utiliser directement indexOf
        // et il nous retourne la position à laquelle se trouve cette chaîne
        //si elle est >-1 ca veut dire que ça existe
        return true
    }
    return false
  }

  public Admin() {
    //méthode pour l'authentification de l'administrateur
    if (this.userAuthentifié) {
      // on voit d'abord si l'user est autentifié
      if (this.userAuthentifié.role=='admin')
        //pour chercher une chaine dans un tableau on peut utiliser directement indexOf
        // et il nous retourne la position à laquelle se trouve cette chaîne
        //si elle est >-1 ca veut dire que ça existe
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
    }
  }

  public removeLocalStorage() {
    localStorage.removeItem('saveUser')
    this.authentification = false
    this.userAuthentifié = undefined
  }

  public addUser(utilisateur:any){
    return this.http.post(this.url,utilisateur)
  }
 
  searchUser(mail:any){
    return this.http.get(this.url2+"byMail?"+mail)
  }



}
