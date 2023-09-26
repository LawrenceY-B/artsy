import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CartComponent } from './pages/cart/cart.component';




const routes: Routes = [
  { path: '', component: CheckoutComponent, children : [
    {
      path: '',
      component: CartComponent,
      title: 'Home Page'
    } ,
 
  ] },
  { path: 'home',   redirectTo: '', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
