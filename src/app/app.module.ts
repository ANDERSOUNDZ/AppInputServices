import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials/materials.module';
import { AppCartHomeComponent } from './app-cart-home/app-cart-home.component';
import { TiendaServicesComponent } from './app-cart-home/tienda-services/tienda-services.component';
import { TiendaInputOutputComponent } from './app-cart-home/tienda-input-output/tienda-input-output.component';
import { SrvProductsComponent } from './app-cart-home/tienda-services/srv-products/srv-products.component';
import { SrvProductsListItemsComponent } from './app-cart-home/tienda-services/srv-products-list-items/srv-products-list-items.component';
import { SrvShopCartComponent } from './app-cart-home/tienda-services/srv-shop-cart/srv-shop-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    TiendaServicesComponent,
    TiendaInputOutputComponent,
    SrvProductsComponent,
    SrvProductsListItemsComponent,
    SrvShopCartComponent,
    AppCartHomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialsModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
