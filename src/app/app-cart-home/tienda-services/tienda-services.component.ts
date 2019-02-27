import { Component, OnInit } from '@angular/core';
import { jsonItem } from 'src/app/model/jsonProduct';
import { CartShopService } from 'src/app/service/cart-shop.service';

@Component({
  selector: 'app-tienda-services',
  templateUrl: './tienda-services.component.html',
  styleUrls: ['./tienda-services.component.scss']
})
export class TiendaServicesComponent implements OnInit {

  itemSngl: jsonItem;

  constructor(public cartShopService: CartShopService) { }

  ngOnInit() {
  }

  deleteItem(item){
    this.itemSngl = item;
    const inicio = this.cartShopService.productCart.indexOf(item);
    this.cartShopService.productCart.splice(inicio,1); 
  }

}
