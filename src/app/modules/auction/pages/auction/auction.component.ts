import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IAuctionModel, ICreator, IAuctionData } from 'src/app/shared/model/auction.model';
import { AuctionService } from 'src/app/shared/services/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss']
})
export class AuctionPageComponent implements OnInit {

CreatorData:ICreator[]=[];
AuctionData:IAuctionData[]=[];
LiveAuction:IAuctionData[]=[];
trial!:IAuctionModel[];

  constructor(
    private auction: AuctionService
  ) { }

  ngOnInit(): void {
    this.auction.getAuctionData().subscribe((data) => {
      this.CreatorData = data.creators
      this.AuctionData = data.auctiondata;

      this.LiveAuction = this.AuctionData.filter((auction) => auction.Status === 'live now');
console.log(this.AuctionData.map((x)=>x.Status))
      
    })
  }
  


}
