import { Component, OnInit } from '@angular/core'
import { UsersService } from 'src/app/services/users.service'
import { CartService } from 'src/app/services/cart.service'
import { GalleryService } from 'src/app/services/gallery.service';


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

  constructor(private cartService:CartService, private service: GalleryService) {}
  
  page=[0,1,2,3,4,5];
  galleryTs: any 
  showMe: boolean = false
  totale: any

  ngOnInit(): void {
    this.getGallery() 
  }

  getGallery() {
    let nbr=0
    this.service.getGalleryService(nbr).subscribe((data) => {
      this.galleryTs = data
      console.log(this.galleryTs)
    })
  }

   // ********************Partie Panier************************
// methode qui ajoute les produit dans le panier et l'enregistre dans db.json

addOeuvreCart( oeuvre:any): void {
  console.log('onn est dans la methode add oeuvre cart')
  console.log(oeuvre)
  let preCart = {
      idOeuvre: oeuvre.id,
      nom:oeuvre.nom,
      image:oeuvre.image,
      prix:oeuvre.prix,
      quantite:'1'
  };
  console.log(preCart)
  this.cartService.addCart(preCart).subscribe(reponse => {
    alert("oeuvre ajouté au panier avec succès !")
    this.getGallery()
  });
}

paginer(p:any){
  this.service.getGalleryService(p).subscribe((data) => {
    this.galleryTs = data
   
  })
}

}
