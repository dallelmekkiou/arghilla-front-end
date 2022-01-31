import { Component, OnInit } from '@angular/core'
import { CartService } from 'src/app/services/cart.service'
import { UsersService } from 'src/app/services/users.service'

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {
  ordinihtml = {
    opera: '',
    pic: '',
    quantita: '',
    totale: '',
    cellulare: '',
    email: '',
    indirizzo: '',
    città: '',
    paese: '',
    nome: '',
  }

  constructor(private serviceCart: CartService) {}

  OrdiniTs: any
  cliente: any

  ngOnInit(): void {
    this.getOrdini()
  }

  getOrdini() {
    this.serviceCart.getOrdiniService().subscribe((data) => {
      this.OrdiniTs = data
      console.log(this.OrdiniTs)
    })
  }
  saveInformazioni(cliente: any) {
    console.log(cliente.value)
    let data = cliente.value
    this.serviceCart.saveInformazioniService(data).subscribe((data) => {
      console.log("L'opera è stata registrata nell'inventario")
    })
  }
}
