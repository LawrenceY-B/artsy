import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { gsap } from 'gsap';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {
  @ViewChild('header')
  header!: ElementRef;
  IteminCart: boolean = false;
  navigation = [
    { name: "Home", tag: "home" },
    { name: "Marketplace", tag: "home/products" },
    { name: "Auction", tag: "auction" },
    { name: "Drop", tag: "auction/drop" },


  ]
  menuOpen = false;
  constructor() { 
    localStorage.getItem('cart') ? this.IteminCart = true : this.IteminCart = false;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  ngAfterViewInit(): void {
    gsap.from('.header__item', {
      duration: 1,
      opacity: 0,
      y:-20,
      stagger: 0.2,
      delay:0.2,
    })
  }
  

  

}
