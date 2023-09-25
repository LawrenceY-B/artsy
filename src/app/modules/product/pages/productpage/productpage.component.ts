import { Component, OnInit } from '@angular/core';
import { IShop } from 'src/app/shared/model/auction.model';
import { AuctionService } from 'src/app/shared/services/auction.service';



@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss'],
})
export class ProductpageComponent implements OnInit {
  Product:IShop[] = [];
  MainView:IShop[] = [];
  Total:number = 0;
 constructor(
  private productService: AuctionService
 ){}
  ngOnInit(): void {
    this.productService.getAuctionData().subscribe((data) => {
      this.Product = data.shop;
      this.Total = this.Product.length;
      this.MainView = this.Product.slice(0, 6);
    });
  }


}
