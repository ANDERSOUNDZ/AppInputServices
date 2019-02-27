import { Component, OnInit, Output, Input , EventEmitter } from '@angular/core';
import { jsonItem } from 'src/app/model/jsonProduct';

@Component({
  selector: 'app-io-productos',
  templateUrl: './io-productos.component.html',
  styleUrls: ['./io-productos.component.scss']
})

export class IoProductosComponent implements OnInit {

  @Input() clase0 = jsonItem;

  @Output() clase1 = new EventEmitter;

  listItem: jsonItem [] = [

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
  
  constructor() { }

  ngOnInit() {
  }

  



}
