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
  Year: boolean = false;
  currentYear!: number
  constructor() {}
  displaycat() {
    this.category = !this.category;
  }
  displayartist() {
    this.Artist = !this.Artist;
  }
  displayprice() {
    this.Price = !this.Price;  }
  displayYear() {
    this.Year = !this.Year;
  }
  changerYear1(){
    this.currentYear = 2019
    console.log(this.currentYear)
  }
  changerYear2(){
    this.currentYear = 2020
    console.log(this.currentYear)
  }
  changerYear3(){
    this.currentYear = 2021
    console.log(this.currentYear)
  }
  changerYear4(){
    this.currentYear = 2022
    console.log(this.currentYear)
  }
  changerYear5(){
    this.currentYear = 2023
    console.log(this.currentYear)
  }
  ngOnInit(): void {
  }

}
