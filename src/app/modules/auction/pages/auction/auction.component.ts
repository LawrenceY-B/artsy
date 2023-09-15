import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAuctionModel, ICreator, ILivecard } from 'src/app/shared/model/auction.model';
import { AuctionService } from 'src/app/shared/services/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionPageComponent implements OnInit {

CreatorData:ICreator[]=[];
LivecardData:ILivecard[]=[];
trial!:IAuctionModel[];

  constructor(
    private auction: AuctionService
  ) { }

  ngOnInit(): void {
    this.auction.getAuctionData().subscribe((data) => {
      this.CreatorData = data.creators
      this.LivecardData = data.livecards
      
    })
  }
  


}
