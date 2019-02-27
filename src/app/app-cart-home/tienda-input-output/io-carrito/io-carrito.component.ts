import { Component, OnInit, Input } from '@angular/core';
import { jsonItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-io-carrito',
  templateUrl: './io-carrito.component.html',
  styleUrls: ['./io-carrito.component.scss']
})
export class IoCarritoComponent implements OnInit {

  @Input() itemsl: jsonItem;

  constructor() { }

  ngOnInit() {
  }

  add(item){
    //this.itemsl.;
  }

}
