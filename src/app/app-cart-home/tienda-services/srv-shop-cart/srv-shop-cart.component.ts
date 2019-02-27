import { Component, OnInit } from '@angular/core';
import { CartShopService } from 'src/app/service/cart-shop.service';
import { jsonItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-srv-shop-cart',
  templateUrl: './srv-shop-cart.component.html',
  styleUrls: ['./srv-shop-cart.component.scss']
})
export class SrvShopCartComponent implements OnInit {

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
