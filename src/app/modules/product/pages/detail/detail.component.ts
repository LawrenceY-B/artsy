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
  SimilarCollection!: IShop[];
  displayedCards: IShop[] = [];

  id!: number;
  constructor(
    private route: ActivatedRoute,
    private ProductService: AuctionService
  ) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe((Params: ParamMap) => {
      this.id = +Params.get('id')!;
    });

    this.ProductService.getAuctionData().subscribe((data) => {
      this.Products = data.shop;
      this.ProductData = this.Products.find((item) => item.id === this.id)!;
      this.SimilarCollection = this.Products.filter(
        (item) => item.product.category === this.ProductData.product.category
      );
      this.updateDisplayedCards();

      console.table(this.Products);
    });
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
  currentSlide = 0;
  cardsPerPage = 3;

  onPreviousClick() {
    this.currentSlide =
      (this.currentSlide - 1 + this.SimilarCollection.length) %
      this.SimilarCollection.length;
    console.log('previous clicked, new current slide is: ', this.currentSlide);
    this.updateDisplayedCards();
  }

  onNextClick() {
    this.currentSlide = (this.currentSlide + 1) % this.SimilarCollection.length;
    console.log('next clicked, new current slide is: ', this.currentSlide);
    this.updateDisplayedCards();
  }

  updateDisplayedCards() {
    this.displayedCards = [];
    for (
      let i = this.currentSlide;
      i < this.currentSlide + this.cardsPerPage;
      i++
    ) {
      const index = i % this.SimilarCollection.length;
      this.displayedCards.push(this.SimilarCollection[index]);
    }
  }
  addtocart(cartItem: IShop, style: HTMLButtonElement) {
    let cart: any = [];
    if (localStorage.getItem('cart')) {
      cart = JSON.parse(localStorage.getItem('cart')!);
    }
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log(cart);

    const image = document.createElement('img');

    image.src = 'assets/svgs/next.svg';

    image.alt = 'Image Description';
    image.style.width = '20px';
    image.style.height = '20px';

    style.innerHTML = 'Added to Cart';
    style.style.backgroundColor = '#FFF';
    style.style.color = '#000';
    style.style.border = '1px solid black';
    style.style.transition = 'all 0.5s ease-in-out';
    setTimeout(() => {
      style.innerText = 'Add to Cart';
      style.style.backgroundColor = '#000';
      style.style.color = '#FFF';
      style.appendChild(image);

      //speak to Botchway
      // location.reload();
    }, 3000);
  }
}
