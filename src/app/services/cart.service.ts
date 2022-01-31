import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getOrdiniService() {
    return this.http.get('http://localhost:3000/ordini')
  }
  saveInformazioniService(clienti: any) {
    return this.http.post('http://localhost:3000/ordini',clienti)
  }
}
