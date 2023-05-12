import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RoutingModule } from './routing.module';
import { ProductpageComponent } from './pages/productpage/productpage.component';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductcardComponent } from './components/productcard/productcard.component';
import { ProductComponent } from './product.component';



@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ProductcardComponent,
    ProductpageComponent,
    DetailComponent,
    ProductComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RoutingModule,
  ]
})
export class ProductModule { }
