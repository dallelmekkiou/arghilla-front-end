import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  // metodo get per mettere in relazione il mio servizio e il database json contenente
  // l'inventario
  getGallery() {
    return this.http.get('http://localhost:3000/gallery')
  }

  // getGalleryInventario() {
  //   return this.http.get('http://localhost:3000/gallery')
  // }

  //method per salvare i dati inseriti nel formilario presente nel component
  // admin (html e ts) nel database che di conseguenza li farà apparire
  // nel browser grazie al metodo get ¨PERCHE NON FUNZIONA ?!?!?!
  saveArtService(products: any) {
    return this.http.post('http://localhost:3000/gallery', products)
  }

  // metodo patch per cambiare un solo elemento id della base de données
  patchOperaService(gallery: any) {
    return this.http.patch('http://localhost:3000/gallery/' + gallery.id, {
      available: !gallery.available,
    })
  }

  //method delete an element in ds json and browser
  deleteOperaService(idgallery: any) {
    return this.http.delete('http://localhost:3000/gallery/' + idgallery)
  }

  // metodo PUT per cambiare diversi elementi id della base de données corrisponde al
  // pulsante modifica su html PERCHE NON FUNZIONA?!?!?!.

  registraModificheService(producthtml: any) {
    return this.http.put(
      'http://localhost:3000/gallery/' + producthtml.id,
      producthtml,
    )
  }

  registraOrdineService(ordinihtml: any) {
    return this.http.put(
      'http://localhost:3000/gallery/' + ordinihtml.id,
      ordinihtml,
    )
  }
}
