import { TestBed } from '@angular/core/testing';

import { CartShopService } from './cart-shop.service';

describe('CartShopService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartShopService = TestBed.get(CartShopService);
    expect(service).toBeTruthy();
  });
});
