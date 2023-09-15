import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { Router } from '@angular/router';
import { AuctionBoardComponent } from './auction.component';
import { RoutingModule } from './routing.module';
import { LivebidsComponent } from './pages/livebids/livebids.component';
import { AuctionPageComponent } from './pages/auction/auction.component';
import { LivecardsComponent } from './components/livecards/livecards.component';
import { CreatorcardComponent } from './components/creatorcard/creatorcard.component';



@NgModule({
  declarations: [
    AuctionPageComponent,
    AuctionBoardComponent,
    LivebidsComponent,
    LivecardsComponent,
    CreatorcardComponent

  ],
  imports: [
    RoutingModule,
    CommonModule,
    SharedModule
  ]
})
export class AuctionModule { }
