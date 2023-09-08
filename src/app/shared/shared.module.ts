import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionCardComponent } from './libs/exhibition-card/exhibition-card.component';
import { NavCardComponent } from './libs/nav-card/nav-card.component';
import { FooterComponent } from './libs/footer/footer.component';
import { ProductCardComponent } from './libs/product-card/product-card.component';
import { RoutingModule } from '../modules/checkout/routing.module';



@NgModule({
  declarations: [
    ExhibitionCardComponent,
    NavCardComponent,
    FooterComponent,
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    RoutingModule,
    
  ],
  exports:[
    ExhibitionCardComponent,
    NavCardComponent,
    FooterComponent,
    ProductCardComponent
  ]
})
export class SharedModule { }
