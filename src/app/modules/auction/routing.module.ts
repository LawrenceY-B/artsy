import { NgModule } from '@angular/core';
import { LivebidsComponent } from './pages/livebids/livebids.component';
import { Routes, RouterModule } from '@angular/router';
import { AuctionPageComponent } from './pages/auction/auction.component';
import { AuctionBoardComponent } from './auction.component';
import { DropsComponent } from './pages/drops/drops.component';

const routes: Routes = [
  { path: '', component: AuctionBoardComponent, children : [
    {path:'', component:AuctionPageComponent },
    {path:'livebids', component:LivebidsComponent },
    {path:'drops',component:DropsComponent}

  ] },

  { path: 'auction',   redirectTo: '/', pathMatch: 'full'},
 
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoutingModule {}
