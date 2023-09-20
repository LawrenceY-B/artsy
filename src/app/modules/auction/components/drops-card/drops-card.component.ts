import { Component, Input, OnInit } from '@angular/core';
import { IAuctionData } from 'src/app/shared/model/auction.model';

@Component({
  selector: 'app-drops-card',
  templateUrl: './drops-card.component.html',
  styleUrls: ['./drops-card.component.scss']
})
export class DropsCardComponent implements OnInit {
@Input() result!:IAuctionData
  constructor() { }

  ngOnInit(): void {
  }

}
