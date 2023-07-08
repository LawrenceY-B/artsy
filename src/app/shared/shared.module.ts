import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionCardComponent } from './libs/exhibition-card/exhibition-card.component';
import { NavCardComponent } from './libs/nav-card/nav-card.component';
import { FooterComponent } from './libs/footer/footer.component';



@NgModule({
  declarations: [
    ExhibitionCardComponent,
    NavCardComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExhibitionCardComponent,
    NavCardComponent,
    FooterComponent
  ]
})
export class SharedModule { }
