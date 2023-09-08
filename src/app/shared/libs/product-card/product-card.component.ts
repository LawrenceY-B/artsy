import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() Name: string= "Product Name";
  @Input() Price: string= "$0.00";
  @Input() ImgUrl: string = ""


  constructor(
    private router: Router
  ) { }
Navigate(){
  this.router.navigate(['/details'])
}
  ngOnInit(): void {
  }

}
