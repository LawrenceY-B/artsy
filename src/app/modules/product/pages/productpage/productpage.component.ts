import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.scss'],
})
export class ProductpageComponent implements OnInit {
  category: boolean = false;
  Price: boolean = false;
  Artist: boolean = false;
  constructor() {}
  displaycat() {
    this.category = !this.category;
  }
  displayartist() {
    this.Artist = !this.Artist;
  }
  displayprice() {
    this.Price = !this.Price;  }
  ngOnInit(): void {}
}
