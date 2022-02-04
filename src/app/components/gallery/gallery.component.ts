import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/services/users.service'
import { CartService } from 'src/app/services/cart.service'


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

  constructor(private service: UsersService, private cartService:CartService) {}

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

   // ********************Partie Panier************************
// methode qui ajoute les produit dans le panier et l'enregistre dans db.json

// addOeuvreCart( oeuvre:any): void {
//   console.log()
//   let preCart = {
//       idOeuvre: oeuvre.id,
//       nomOeuvre:oeuvre.nomProduit,
//       image:oeuvre.image,
//       prix:oeuvre.prix,
//       quantite:'1'
//   };
//   console.log(preCart)
//   this.cartService.addCart(preCart).subscribe(reponse => {
//     alert("oeuvre ajouté au panier avec succès !")
//     this.getGallery()
//   });
// }
}
