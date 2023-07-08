import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionCardComponent } from './libs/exhibition-card/exhibition-card.component';
import { NavCardComponent } from './libs/nav-card/nav-card.component';



@NgModule({
  declarations: [
    ExhibitionCardComponent,
    NavCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExhibitionCardComponent,
    NavCardComponent

  ]
})
export class SharedModule { }
