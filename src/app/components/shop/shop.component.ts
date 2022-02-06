import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { CartService } from 'src/app/services/cart.service'
import { UsersService } from 'src/app/services/users.service'
import { Output, EventEmitter } from '@angular/core';
import { GalleryService } from 'src/app/services/gallery.service';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {

  constructor(private galleryService: GalleryService, private cartService: CartService, private router: Router) {}

  cart: any;
  counterValue: number = 0;
  @Output() counterChange = new EventEmitter();
  sousTotal: number = 0;
  total: number = 0;
  showCommandeForms=false
  showMessageFelicitations=false
  showMessageCart=false
  showCart=false

  ngOnInit(): void {
    this.afficherCart();
   
  }

  
  // ********************************Partie panier***************************************************

// la methode qui affiche le panier et calcule le total
afficherCart(): void {

  //faire la vérification sur le panier si il est vide
  this.cartService.getOeuvresCart().subscribe(data => {
    this.cart = data;
    if (this.cart.length>0){
    this.showCart=true
    console.log(this.cart.id);
    this.total = 0;
    this.sousTotal = 0;
    // calculer le sous total de chaque article du panier si y'a des article dans le panier
    this.cart.forEach((oeuvre: any) => {
      console.log(oeuvre.prix, oeuvre.quantite)
      this.sousTotal = this.sousTotal + (oeuvre.prix * oeuvre.quantite)
      console.log(this.sousTotal)
      this.total += this.sousTotal;
      this.sousTotal = 0;
      console.log(this.sousTotal)
    })
    }else{this.showMessageCart=true}
   })
  

}

// la methode qui incrémente la quantité du produit dans la panier

increment(oeuvre: any): void {
  this.counterValue = oeuvre.quantite
  if (this.counterValue < 15) {
    // value: this.counterValue
    this.counterChange.emit(++this.counterValue);
    // value: this.counterValue
    oeuvre.quantite = this.counterValue
    this.cartService.incrementerQuantite(oeuvre).subscribe(reponse => {
    })
  } else {
    alert("Quantité trop élevée !")
  }
  this.afficherCart();
}

  // la methode qui décrémente la quantité du produit dans la panier

decrement(oeuvre: any): void {
  this.counterValue = oeuvre.quantite
  if (this.counterValue > 1) {
    // this.counterValue--;
    // value: this.counterValue
    this.counterChange.emit(--this.counterValue);
    oeuvre.quantite = this.counterValue
    this.cartService.decrementerQuantite(oeuvre).subscribe(reponse => {
    })
  } else {
    this.deleteOeuvreCart(oeuvre.id)
  }
  this.afficherCart();

}

// la methode qui supprime un produit du panier

deleteOeuvreCart(id: any): void {
  console.log(id)
  this.cartService.viderCart(id).subscribe(reponse => {
    this.afficherCart();
    alert("produit supprimé du panier !")
  });
}

// afficher le formulaire de la commande pour l'utilisateur

afficherFormulaireCommande() {
  this.showCart=false
  this.showCommandeForms=true
  // alert('Renseignez le formulaire de commande SVP !')
}

  // ************************************Partie Commande********************************************

  // enregistrer la commande dans la BDD aprés inscription de l'utilisateur

  addCommande(commande: any) {
    let data = commande.value;
    data.total = this.total
    if (confirm("Validez pour confirmer votre commande !")) {
      // Code à éxécuter si le l'utilisateur clique sur "OK"
      this.cartService.createCommande(data).subscribe(reponse => {
      this.showCommandeForms=false
      this.showCart=false
      this.showMessageFelicitations=true
      console.log('cart',this.cart)
      for (let i=0;i<this.cart.length;i++){
        console.log(this.cart[i].id)
        this.cartService.viderCart(this.cart[i].id).subscribe(reponse => {
        });
      }
      this.cart=undefined
      // this.router.navigateByUrl('gallery') 
    }) 
    } else {this.showMessageCart=true
      // Code à éxécuter si le l'utilisateur clique sur "Annuler"
      this.router.navigateByUrl('gallery') 

    }
  }
  
}
