import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
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
    prix: '',
    quantite: '',
    disponibilite: '',
    categorie: {},
  }

  // è qui che devo dichiarare la route per il servizio correlato, metto prima pubblico o privato
  // poi do un nome a cazzo di cane per dire che è uguale al nome del component del servizio a cuio voglio
  // dirigermi

  constructor(private service: GalleryService,private router: Router) {}

  page=[0,1,2,3,4,5];
  galleryAdmin: any 
  categorieAdmin: any
  categorie: any
  categorieById: any

  showEditForms = false
  showAddForms = false

  ngOnInit(): void {
    this.getGalleryAdmin()
    this.getCategorieAdmin()
  }

  ShowAddForms() {
    this.showAddForms = true
   
  }

  //******************************************************   REQUETE CRUD GET OEUVRE  ***********************************************

  getGalleryAdmin() {
  let nbr=0
    this.service.getGalleryService(nbr).subscribe((data) => {
      this.galleryAdmin = data
    })
  }
  //******************************************************   REQUETE CRUD GET CATEGORIE  ***********************************************
  getCategorieAdmin() {
    this.service.getCategorieService().subscribe((data) => {
      this.categorieAdmin = data
      console.log(this.galleryAdmin)
    })
  }
  // getCategorieId(id:any) {
  //   this.service.getCategorieServiceId(id).subscribe((data) => {
  //     this.categorieById = data
  //     console.log(this.categorieById)
  //   })
  // }

  //******************************************************  REQUETE CRUD POST   ***********************************************

  addOeuvre(oeuvre: any) {
    let data = oeuvre.value
    this.showAddForms= false
    this.service.getCategorieServiceId(data.categorie).subscribe((response) => {
      data.categorie = response
      this.service.addOeuvreService(data).subscribe((resp) => {})
    })
  }

  //******************************************************   REQUETE CRUD PATCH   ***********************************************
  patchOpera(galleryAdmin: any) {
    console.log(!galleryAdmin.available)
    this.service.patchOperaService(galleryAdmin).subscribe((data) => {
      galleryAdmin.available = !galleryAdmin.available
    })
  }

  //******************************************************   REQUETE CRUD DELETE   ***********************************************
  deleteOeuvre(id: any) {
    this.getGalleryAdmin()
    this.service.deleteOeuvreService(id).subscribe((data) => {
      console.log("L'oeuvre a été bien supprimée")
     
    })
  }

  editOeuvre(g: any) {
    this.showEditForms = true
    this.oeuvrehtml = g
    console.log('href', g._links.categorie.href)
    this.service.getCategorie(g._links.categorie.href).subscribe((data) => {
      this.oeuvrehtml.categorie = data
      console.log('categorie', this.oeuvrehtml.categorie)
      console.log(g)
    })
  }

  formulaireModifications(g: any) {
    this.galleryAdmin = g
  }

  saveModifications() {
    this.showEditForms= false
    this.service.saveModificationsService(this.oeuvrehtml).subscribe((data) => {
      console.log('Le modifiche sono state effettuate!')
      // (this.producthtml) this è per dire che stiamo su una variabile locale
    })
  }

  paginer(p:any){
    this.service.getGalleryService(p).subscribe((data) => {
      this.galleryAdmin = data
     
    })
  }
  
}
