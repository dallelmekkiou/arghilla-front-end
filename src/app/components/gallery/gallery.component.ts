import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  ordinihtml = {
    opera: '',
    pic: '',
    quantita: '',
    totale: '',
    cellulare: '',
    email: '',
    indirizzo: '',
    citta: '',
    paese: '',
    nome: '',
  }

  constructor(private service: UsersService) {}

  galleryTs: any //variabile locale

  showMe: boolean = false
  totale: any

  ngOnInit(): void {
    this.getGallery()

    // qui richiamo il metodo usato nel ts affiché sia mostrato
    // automaticamente sulla pagina
  }

  //metodo getGallery per recuperare le informazioni del servizio user
  // questo servizio (variabile locaale dichiarata nel constructor)si lega al metodo dichiarato
  // nel servizio user (getGallery) per abbonarsi ai dati e restituirli sulla tabella locale
  // dichiarata sotto il costruttore.

  getGallery() {
    this.service.getGallery().subscribe((data) => {
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

  formularioAcquisto(g: any) {
    this.showMe = true
    this.totale = g.prezzo * g.quantita
    console.log(this.totale)
  }

  registraOrdine() {
    this.service.registraOrdineService(this.ordinihtml).subscribe((data) => {
      console.log('Le modifiche sono state effettuate!')
      // (this. ordinihtml) this è per dire che stiamo su una variabile locale
    })
  }

  AggiungereOrdine(ordinihtml: any) {
    console.log(ordinihtml.value)
    let data = ordinihtml.value
    this.service.registraOrdineService(data).subscribe((data) => {
      console.log("L'ordine è stato registrato")
    })
  }
}
