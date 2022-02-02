import { Component, OnInit } from '@angular/core'
import { GalleryService } from 'src/app/services/gallery.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  oeuvrehtml = {
    id: '',
    nom: '',
    description: '',
    image: '',
    prix: 0,
    quantite: 0,
    disponibilite: false,
    categorie: '',
  }

  // è qui che devo dichiarare la route per il servizio correlato, metto prima pubblico o privato
  // poi do un nome a cazzo di cane per dire che è uguale al nome del component del servizio a cuio voglio
  // dirigermi

  constructor(private service: GalleryService) {}

  galleryAdmin: any //variabile locale

  categorieAdmin: any

  showMe: boolean = false

  ngOnInit(): void {
    this.getGalleryAdmin()
    this.getCategorieAdmin()
  }

  //******************************************************   REQUETE CRUD GET OEUVRE  ***********************************************

  getGalleryAdmin() {
    this.service.getGalleryService().subscribe((data) => {
      this.galleryAdmin = data
      console.log(this.galleryAdmin)
    })
  }
  //******************************************************   REQUETE CRUD GET CATEGORIE  ***********************************************
  getCategorieAdmin() {
    this.service.getCategorieService().subscribe((data) => {
      this.categorieAdmin = data
      console.log(this.galleryAdmin)
    })
  }

  //******************************************************  REQUETE CRUD POST   ***********************************************

  addOeuvre(oeuvre: any) {
    console.log(oeuvre.value)
    let data = oeuvre.value
    this.service.addOeuvreService(data).subscribe((resp) => {
      console.log("L'opera è stata registrata nell'inventario")
    })
  }

  //******************************************************   REQUETE CRUD PATCH   ***********************************************
  patchOpera(galleryAdmin: any) {
    console.log(!galleryAdmin.available)
    this.service.patchOperaService(galleryAdmin).subscribe((data) => {
      console.log("L'attuale disponibilità del prodotto è stata registrata")
      galleryAdmin.available = !galleryAdmin.available
    })
  }

  //******************************************************   REQUETE CRUD DELETE   ***********************************************
  deleteOeuvre(id: any) {
    this.service.deleteOeuvreService(id).subscribe((data) => {
      console.log("L'oeuvre a été bien supprimée")
    })
  }

  editOeuvre(g: any) {
    console.log('coucou')

    this.showMe = true
    this.galleryAdmin = g
  }

  // qui sto dicendo che al click il metodo formulario modifica deve apparire con showMe
  formulaireModifications(g: any) {
    this.galleryAdmin = g
  }

  saveModifications() {
    this.service.saveModificationsService(this.oeuvrehtml).subscribe((data) => {
      console.log('Le modifiche sono state effettuate!')
      // (this.producthtml) this è per dire che stiamo su una variabile locale
    })
  }

  //method per salvare i dati inseriti nel formulario presente nel component
  // admin (html e ts) nel database che di conseguenza li farà apparire
  // nel browser grazie al metodo get

  // getInventario() {
  //   this.service.getGalleryInventario().subscribe((data) => {
  //     this.galleryInventario = data
  //     console.log(this.galleryInventario)
  //   })
  // }
}
