import { Component, OnInit } from '@angular/core';
import { jsonItem } from 'src/app/model/jsonProduct';
import { CartShopService } from 'src/app/service/cart-shop.service';

@Component({
  selector: 'app-srv-products',
  templateUrl: './srv-products.component.html',
  styleUrls: ['./srv-products.component.scss']
})
export class SrvProductsComponent implements OnInit {

  itemLista: jsonItem[] = [

    {id: 1, //octales no disponibles usar num,eros enteros exactos
    name: "Dasani",
    description: "Botella Agua"
    },
    {id: 2, //octales no disponibles usar num,eros enteros exactos
      name: "Citrus",
      description: "Botella jugo"
    },
    {id: 3, //octales no disponibles usar num,eros enteros exactos
      name: "Sprite",
      description: "Botella Soda"
    }
  ]

  constructor(public cartShopService: CartShopService) { }

  ngOnInit() {
  }

  addItem(item){
    this.cartShopService.productCart.push(item);
  }

}
