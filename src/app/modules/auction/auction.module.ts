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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LikebtnComponent } from './components/likebtn/likebtn.component';
import { AutoScrollDirective } from './directives/auto-scroll.directive';
import { DropsComponent } from './pages/drops/drops.component';
import { DropsCardComponent } from './components/drops-card/drops-card.component';



@NgModule({
  declarations: [
    AuctionPageComponent,
    AuctionBoardComponent,
    LivebidsComponent,
    DropsComponent,
    LivecardsComponent,
    LikebtnComponent,
    CreatorcardComponent,
    AutoScrollDirective,
    DropsCardComponent
    

  ],
  imports: [
    RoutingModule,
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class AuctionModule { }
