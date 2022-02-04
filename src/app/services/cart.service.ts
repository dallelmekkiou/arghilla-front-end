import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  // addCart(panier:any){
  //   return this.http.post("http://localhost:3000/panier", panier);
  // }
}
