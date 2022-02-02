import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
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

  constructor(private service: UsersService) {}

  galleryTs: any //variabile locale

  showMe: boolean = false
  totale: any

  ngOnInit(): void {
    this.getGallery()

    
  }

  getGallery() {
    this.service.getGalleryService().subscribe((data) => {
      this.galleryTs = data
      console.log(this.galleryTs)
    })
  }

  piu(g: any) {
    console.log(g)
  }

  meno(g: any) {
    console.log(g)
  }

  // formularioAcquisto(g: any) {
  //   this.showMe = true
  //   this.totale = g.prezzo * g.quantita
  //   console.log(this.totale)
  // }

  // registraOrdine() {
  //   this.service.registraOrdineService(this.ordinihtml).subscribe((data) => {
  //     console.log('Le modifiche sono state effettuate!')
  //     // (this. ordinihtml) this è per dire che stiamo su una variabile locale
  //   })
  // }

  // AggiungereOrdine(ordinihtml: any) {
  //   console.log(ordinihtml.value)
  //   let data = ordinihtml.value
  //   this.service.registraOrdineService(data).subscribe((data) => {
  //     console.log("L'ordine è stato registrato")
  //   })
  // }
}
