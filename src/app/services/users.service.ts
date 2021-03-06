import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  url = 'http://localhost:8080/oeuvres'
  url1 = 'http://localhost:8080'

  constructor(private http: HttpClient) {}

  //******************************************************   REQUETE CRUD GET   ***********************************************

  getGalleryService() {
    return this.http.get(this.url)
  }

  //******************************************************  REQUETE CRUD POST   ***********************************************

  addOeuvreService(oeuvre: any) {
    console.log(oeuvre)
    return this.http.post(this.url1 + '/addOeuvre', oeuvre)
  }

  //******************************************************   REQUETE CRUD DELETE   ***********************************************

  deleteOeuvreService(idoeuvre: any) {
    return this.http.delete(this.url1 + '/deleteOeuvre/' + idoeuvre)
  }

  //******************************************************   REQUETE CRUD PATCH   ***********************************************
  patchOperaService(oeuvre: any) {
    return this.http.patch(this.url + '/' + oeuvre.id, {
      available: !oeuvre.available,
    })
  }

  //******************************************************   REQUETE CRUD PUT   ***********************************************

  saveModificationsService(oeuvrehtml: any) {
    return this.http.put(this.url + '/' + oeuvrehtml.id, oeuvrehtml)
  }

  registraOrdineService(oeuvrehtml: any) {
    return this.http.put(this.url + '/' + oeuvrehtml.id, oeuvrehtml)
  }
}
