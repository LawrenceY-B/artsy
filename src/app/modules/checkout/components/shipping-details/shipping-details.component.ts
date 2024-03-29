import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IShop } from 'src/app/shared/model/auction.model';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.scss']
})
export class ShippingDetailsComponent implements OnInit {

  CartItems: IShop[] = [];
count: number = 0
Total: number = 0;
@Output() switchtoPaymentEvent = new EventEmitter();
  tempresults: IShop[] = [];


  constructor() {

   }

  ngOnInit(): void {
   this.getCartItems();
  }  
  getCartItems(){
    this.CartItems = JSON.parse(localStorage.getItem('cart')!) || [];
    this.count = this.CartItems.length;
    this.getTotal();
  }
  getTotal(){
    this.Total = this.CartItems.reduce((acc, item) => acc + item.product.price, 0);
  
  }
  add(cart:IShop) {
    cart.product.quantity++;
    cart.product.price = cart.product.unitPrice * cart.product.quantity;
    this.getTotal();
  }
  remove( cart:IShop) {
    console.log('price:', cart.product.price);
    console.log('Unit price:', cart.product.unitPrice);
    
    if (cart.product.quantity > 1) {
      cart.product.quantity--;
      cart.product.price = cart.product.unitPrice * cart.product.quantity; // Corrected calculation
      console.log('Updated price:', cart.product.price);
      this.getTotal();
    }
    
  }
  switchtoPayment(status:string) {
    this.getCartItems();
    localStorage.setItem('cart', JSON.stringify(this.CartItems));
    if(this.CartItems.length>0){
      this.switchtoPaymentEvent.emit(status);
    }
    
    

  }
  removeItem(cart:IShop) {   

    const itemIndex = this.CartItems.indexOf(cart);
    if (itemIndex > -1) {
      //apparently i have to splice to remove, failed miserably in thinking i could change how pop works
      
      this.tempresults.splice(itemIndex, 1);
    }
    this.tempresults=this.CartItems
    this.count = this.tempresults.length;
    localStorage.setItem('cart', JSON.stringify(this.tempresults));
    this.getTotal()
  }


}
