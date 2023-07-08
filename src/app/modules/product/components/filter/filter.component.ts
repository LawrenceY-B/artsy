import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

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

  ngOnInit(): void {
  }

}
