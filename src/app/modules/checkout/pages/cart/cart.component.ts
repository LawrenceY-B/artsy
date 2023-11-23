import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  status: string = 'Cart';

  constructor() { }

  ngOnInit(): void {
  }
  receiveCheckout(checkout: string){
    if(checkout === 'Details'){
      this.status = 'Details';
    }
  }
  receivePayment(payment: string){
    if(payment === 'Payment'){
      this.status = 'Payment';
    }
  }
  switchtoDetails(){
    this.status = 'Details';

  }
  switchtoCart(){
    this.status = 'Cart';
  }
  switchtoPayment(){
    this.status = 'Payment';

  }

}
