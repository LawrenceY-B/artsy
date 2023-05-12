import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcard',
  templateUrl: './productcard.component.html',
  styleUrls: ['./productcard.component.scss']
})
export class ProductcardComponent implements OnInit {
  @Input() FlexDirection!: boolean;
  @Input() ImgUrl!: string;



  constructor() { }

  ngOnInit(): void {
  }

}
