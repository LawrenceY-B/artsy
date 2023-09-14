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
  navigation = [
    { name: "Home", tag: "home" },
    { name: "Marketplace", tag: "products" },
    { name: "Auction", tag: "auction" },
    { name: "Drops", tag: "drops" },


  ]
  menuOpen = false;

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
