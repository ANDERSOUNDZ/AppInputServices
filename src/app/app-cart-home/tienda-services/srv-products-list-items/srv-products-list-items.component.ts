import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { jsonItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-srv-products-list-items',
  templateUrl: './srv-products-list-items.component.html',
  styleUrls: ['./srv-products-list-items.component.scss']
})
export class SrvProductsListItemsComponent implements OnInit {

  @Input() itemSngl: jsonItem;

  //
  @Output() shareItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  //funcion comparte el json
  share(){
    this.shareItem.emit(this.itemSngl);
  }

}
