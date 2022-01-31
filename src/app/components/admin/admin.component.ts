import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  producthtml = {
    opera: '',
    descrizione: '',
    pic: '',
    prezzo: '',
    disponibilita: '',
    pezzi: '',
  }

  // è qui che devo dichiarare la route per il servizio correlato, metto prima pubblico o privato
  // poi do un nome a cazzo di cane per dire che è uguale al nome del component del servizio a cuio voglio
  // dirigermi

  constructor(private service: UsersService) {}

  galleryAdmin: any //variabile locale

  showMe: boolean = false

  ngOnInit(): void {
    this.getGalleryAdmin()
  }

  getGalleryAdmin() {
    this.service.getGallery().subscribe((data) => {
      this.galleryAdmin = data
      console.log(this.galleryAdmin)
    })
  }

  //méthode patchOpere pour modifier un seul element
  patchOpera(galleryAdmin: any) {
    console.log(!galleryAdmin.available)
    this.service.patchOperaService(galleryAdmin).subscribe((data) => {
      console.log("L'attuale disponibilità del prodotto è stata registrata")
      galleryAdmin.available = !galleryAdmin.available
    })
  }

  //méthode deleteOpera pour supprimer
  deleteOpera(g: any) {
    // console.log("coucou")
    // console.log(g.id)
    this.service.deleteOperaService(g.id).subscribe((data) => {
      console.log("L'opera è stata rimossa dall'inventario")
    })
  }

  editOpera(g: any) {
    this.galleryAdmin = g
  }

  // qui sto dicendo che al click il metodo formulario modifica deve apparire con showMe
  formularioModifica(g: any) {
    this.showMe = true
  }
// una volta che il formulario appare sullo schermo, il metodo registraModifiche si mette
// in relazione con il servizio e il suo metodo corrispettivo registraModificheServizio per 
// comunicare con il database PERCHE NON FUNZIONA?!?!?!. 

  registraModifiche() {
    this.service
      .registraModificheService(this.producthtml)
      .subscribe(data => {
        console.log('Le modifiche sono state effettuate!')
        // (this.producthtml) this è per dire che stiamo su una variabile locale
      })
  }

  //method per salvare i dati inseriti nel formulario presente nel component
  // admin (html e ts) nel database che di conseguenza li farà apparire
  // nel browser grazie al metodo get
  saveArt(g: any) {
    console.log(g.value)
    let data = g.value
    this.service.saveArtService(data).subscribe((data) => {
      console.log("L'opera è stata registrata nell'inventario")
    })
  }

  

  // getInventario() {
  //   this.service.getGalleryInventario().subscribe((data) => {
  //     this.galleryInventario = data
  //     console.log(this.galleryInventario)
  //   })
  // }
}
