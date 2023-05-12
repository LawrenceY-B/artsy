import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'checkout',
    data: {},
    loadChildren: () =>
      import('./modules/checkout/checkout.module').then((m) => m.CheckoutModule),
  },
  {
    path: 'auction',
    data: {},
    loadChildren: () =>
      import('./modules/auction/auction.module').then((m) => m.AuctionModule),
  },
  {
    path: '',
    data: {},
    loadChildren: () =>
      import('./modules/product/product.module').then((m) => m.ProductModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
