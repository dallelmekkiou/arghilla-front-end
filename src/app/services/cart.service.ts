import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  
constructor(private http:HttpClient) { }

  url="http://localhost:8080/commandes";
  url1="http://localhost:3000/commande"
  
addCart(cart:any){
  return this.http.post("http://localhost:3000/cart", cart);
}

  
getOeuvresCart() {
  return this.http.get("http://localhost:3000/cart");
}

incrementerQuantite(oeuvreCart:any) {
  return this.http.patch("http://localhost:3000/cart/"+oeuvreCart.id,{quantite:oeuvreCart.quantite});

}

decrementerQuantite(oeuvreCart:any) {
  return this.http.patch("http://localhost:3000/cart/"+oeuvreCart.id,{quantite:oeuvreCart.quantite});
}

// supprimer une oeuvre du panier
viderCart(id:any) {
  return this.http.delete("http://localhost:3000/cart/"+id);
}

// crée la commande sur la BDD
// createCommande(commande:any) {
//   return this.http.post(this.url, commande);
// }

createCommande(commande:any) {
  return this.http.post(this.url1, commande);
}

}
