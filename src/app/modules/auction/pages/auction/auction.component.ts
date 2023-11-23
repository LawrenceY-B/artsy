import { trigger, transition, useAnimation } from '@angular/animations';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { fadeIn, fadeOut } from 'src/animations/carousel.animations';
import {
  IAuctionModel,
  ICreator,
  IAuctionData,
} from 'src/app/shared/model/auction.model';
import { AuctionService } from 'src/app/shared/services/auction.service';

@Component({
  selector: 'app-auction',
  templateUrl: './auction.component.html',
  styleUrls: ['./auction.component.scss'],

  animations: [
    trigger('carouselAnimation', [
      transition('void => *', [
        useAnimation(fadeIn, { params: { time: '1000ms' } }),
      ]),
      transition('* => void', [
        useAnimation(fadeOut, { params: { time: '1000ms' } }),
      ]),
    ]),
  ],
})
export class AuctionPageComponent implements OnInit {
  CreatorData: ICreator[] = [];
  AuctionData: IAuctionData[] = [];
  LiveAuction: IAuctionData[] = [];
  trial!: IAuctionModel[];
  cardsPerPage = 3;
  displayedCards: IAuctionData[] = [];
  highlight:number=0
  currentIndicator:number=0

  constructor(private auction: AuctionService) {}
  
  ngOnInit(): void {
    this.auction.getAuctionData().subscribe((data) => {
      this.CreatorData = data.creators;
      this.AuctionData = data.auctiondata;

      this.LiveAuction = this.AuctionData.filter(
        (auction) => auction.Status === 'live now'
      );
      this.displayedCards = this.AuctionData.filter(
        (auction) => auction.Status === 'live now'
      );
       this.updateDisplayedCards();
    });
  }

  currentSlide = 0;

  onPreviousClick() {
    this.currentSlide = (this.currentSlide - 1 + this.LiveAuction.length) % this.LiveAuction.length;
    this.updateDisplayedCards();
  }
  
  onNextClick() {
    this.currentSlide = (this.currentSlide + 1) % this.LiveAuction.length;
    this.updateDisplayedCards();
  }
  
   updateDisplayedCards() {
    this.displayedCards = [];
    for (let i = this.currentSlide; i < this.currentSlide + this.cardsPerPage; i++) {
      const index = i % this.LiveAuction.length;
      this.displayedCards.push(this.LiveAuction[index]);
    }
    this.currentIndicator = this.currentSlide;
    
  }
  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateDisplayedCards();
  }
  
}
