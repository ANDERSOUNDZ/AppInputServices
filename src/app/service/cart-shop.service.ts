import { Injectable } from '@angular/core';
import { jsonItem } from '../model/jsonProduct';

@Injectable({
  providedIn: 'root'
})
export class CartShopService {

  public productCart: jsonItem [] = [];

  constructor() { }

}
