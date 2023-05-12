import { NgModule } from '@angular/core';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { ProductComponent } from './product.component';



const routes: Routes = [
  { path: '', component: ProductComponent, children : [
    {
      path: '',
      component: HomeComponent,
      title: 'Home Page'
    } ,
    {
      path: 'products',
      component: ProductpageComponent,
      title: 'Home details'
    },
    {
      path: 'details/:id',
      component: DetailComponent,
      title: 'Home details'
    }
  ] },
  { path: 'home',   redirectTo: '/', pathMatch: 'full'},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
