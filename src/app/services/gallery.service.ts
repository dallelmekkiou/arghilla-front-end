import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  url = 'http://localhost:8080/oeuvres'
  url1 = 'http://localhost:8080'
  url2 = 'http://localhost:8080/categories'

  constructor(private http: HttpClient) {}

  //******************************************************   REQUETE CRUD GET   ***********************************************

  getGalleryService() {
    return this.http.get(this.url)
  }

  getCategorieService() {
    return this.http.get(this.url2)
  }

  getCategorie(href:any){
    return this.http.get(href)
  }

  getCategorieServiceId(id:any){
    return this.http.get(this.url2+'/'+id)
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
    return this.http.put(this.url1 + '/editOeuvre/' + oeuvrehtml.id, oeuvrehtml)
  }

  registraOrdineService(oeuvrehtml: any) {
    return this.http.put(this.url + '/' + oeuvrehtml.id, oeuvrehtml)
  }
}
