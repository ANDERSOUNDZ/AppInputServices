import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SrvShopCartComponent } from './srv-shop-cart.component';

describe('SrvShopCartComponent', () => {
  let component: SrvShopCartComponent;
  let fixture: ComponentFixture<SrvShopCartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SrvShopCartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SrvShopCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
