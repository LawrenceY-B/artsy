import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutComponent } from './checkout.component';
import { RoutingModule } from './routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentDetailsComponent } from './components/payment-details/payment-details.component';

import { CartComponent } from './pages/cart/cart.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    CheckoutComponent,
    PaymentDetailsComponent,
    ShippingDetailsComponent,
    ShoppingCartComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    SharedModule
  ]
})
export class CheckoutModule { }
