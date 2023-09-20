import { Component, OnInit } from '@angular/core';
import { IAuctionData } from 'src/app/shared/model/auction.model';
import { AuctionService } from 'src/app/shared/services/auction.service';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.scss'],
})
export class DropsComponent implements OnInit {
  notification: Boolean = false;

  constructor(private AuctionService: AuctionService) {}
  AuctionData: IAuctionData[] = [];
  ngOnInit(): void {
    this.fetchData()
  }
  fetchData() {
    this.AuctionService.getAuctionData().subscribe((data) => {
      this.AuctionData = data.auctiondata;
      console.table(this.AuctionData)
    });
  }
  notify(x: HTMLImageElement) {
    this.notification = !this.notification;
    if (this.notification) {
      x.src = 'assets/svgs/bell-tick.svg';
      this.notification = true;
    } else if (!this.notification) {
      x.src = 'assets/svgs/bell-outline.svg';
    }
  }
}
