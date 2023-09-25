import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IShop } from 'src/app/shared/model/auction.model';
import { AuctionService } from 'src/app/shared/services/auction.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  descriptiontoggle: boolean = false;
  listingstoggle: boolean = false;
  statustoggle: boolean = false;
  OrderNo: number = 1;
  isSaved: boolean = false;
  Products: IShop[] = [];
  ProductData!: IShop;
  SimilarCollection!:IShop[]
  id!: number;
  constructor(private route: ActivatedRoute,
    private ProductService: AuctionService) {}
  ngOnInit(): void {

    this.route.paramMap.subscribe((Params: ParamMap) => {
      this.id = +Params.get('id')!;
    });

    this.ProductService.getAuctionData().subscribe((data) => {
      this.Products = data.shop;
      this.ProductData = this.Products.find((item) => item.id === this.id)!
      this.SimilarCollection= this.Products.filter((item) =>item.product.category === this.ProductData.product.category)
      console.table(this.Products);
    })

  }

  displayListings() {
    if (!this.listingstoggle) {
      this.listingstoggle = true;
    } else {
      this.listingstoggle = false;
    }
  }
  displayStatus() {
    if (!this.statustoggle) {
      this.statustoggle = true;
    } else {
      this.statustoggle = false;
    }
  }
  displayDescription() {
    if (!this.descriptiontoggle) {
      this.descriptiontoggle = true;
    } else {
      this.descriptiontoggle = false;
    }
  }
  add() {
    this.OrderNo++;
  }
  remove() {
    if (this.OrderNo > 1) {
      this.OrderNo--;
    }
  }

  changecolor(path: HTMLElement) {
    if (!this.isSaved) {
      path.style.fill = '#F44336';
      path.style.stroke = '#fff';
      this.isSaved = true;
    } else {
      this.isSaved = false;
      path.style.fill = '#fff';
      path.style.stroke = '#bcb7b7';
    }
  }
}
