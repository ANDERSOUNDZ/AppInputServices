import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { jsonItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-io-productos-listitems',
  templateUrl: './io-productos-listitems.component.html',
  styleUrls: ['./io-productos-listitems.component.scss']
})
export class IoProductosListitemsComponent implements OnInit {

  @Input() itemUnico: jsonItem;

  @Output() sacarItem = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  itemObj(){
    this.sacarItem.emit(this.itemUnico);
  }

}
