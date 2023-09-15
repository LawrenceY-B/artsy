import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-creatorcard',
  templateUrl: './creatorcard.component.html',
  styleUrls: ['./creatorcard.component.scss'],
})
export class CreatorcardComponent implements OnInit {
  Readmore:boolean = true;
  @Input() ImgUrl!: string;
  @Input() CreatorName!: string;
  @Input() HighestBids!: number;
  @Input() CreatorUrl!: string;
@Input() TimeLeft!: number;
   Auction: string = '00:00:00';
  @Input() CreatorInfo: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia id ab quia, autem tempora aliquid in exercitationem vero modi culpa non. Inventore quo nesciunt repudiandae nihil officia, autem voluptatum?';

  constructor() {}

  ngOnInit(): void {}
  readmore(){
this.Readmore = !this.Readmore;
  }
}
