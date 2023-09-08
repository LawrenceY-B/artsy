import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
 productstatus:string = "Out of Stock";
  descriptiontoggle: boolean = false;
  listingstoggle: boolean = false;
  statustoggle: boolean = false;
  OrderNo: number = 1;
  isSaved: boolean = false;
  constructor() {}

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

  ngOnInit(): void {}
}
