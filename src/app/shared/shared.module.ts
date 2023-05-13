import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExhibitionCardComponent } from './libs/exhibition-card/exhibition-card.component';



@NgModule({
  declarations: [
    ExhibitionCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ExhibitionCardComponent

  ]
})
export class SharedModule { }
