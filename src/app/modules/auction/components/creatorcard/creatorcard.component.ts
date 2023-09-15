import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICreator } from 'src/app/shared/model/auction.model';

@Component({
  selector: 'app-creatorcard',
  templateUrl: './creatorcard.component.html',
  styleUrls: ['./creatorcard.component.scss'],
})
export class CreatorcardComponent implements OnInit {
  constructor(
    private FormGroup: FormBuilder,
  ){


  }
  BidForm = this.FormGroup.group({
    Bid: new FormControl('',[Validators.required,Validators.min(0.01)])
  });

  Readmore:boolean = true;
  @Input() Result!: ICreator;

  intervalId:any;
  @Input() countdownHours!:number
  countdownSeconds!: number ;
   Auction: string = '00:00:00';
  @Input() CreatorInfo: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim officia id ab quia, autem tempora aliquid in exercitationem vero modi culpa non. Inventore quo nesciunt repudiandae nihil officia, autem voluptatum?';
submitForm(){
  const newBid=parseFloat(this.BidForm.value.Bid as string);
  console.log(newBid);
  if(newBid>this.Result.HighestBids){
    this.Result.HighestBids=newBid;
  }
}

  ngOnInit(): void {
    this.countdownSeconds = this.Result.countdownHours * 3600; // Convert hours to seconds
    this.startCountdown();
  }
  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.countdownSeconds > 0) {
        this.countdownSeconds--;
        this.updateDisplayTime();
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000); // Update countdown every 1 second
  }

  updateDisplayTime() {
    const hours = Math.floor(this.countdownSeconds / 3600);
    const minutes = Math.floor((this.countdownSeconds % 3600) / 60);
    const seconds = this.countdownSeconds % 60;
    this.Auction = `${this.padZero(hours)}h : ${this.padZero(minutes)}m : ${this.padZero(seconds)}s`;
  }

  padZero(num: number): string {
    return num.toString().padStart(2, '0');
  }
  readmore(){
this.Readmore = !this.Readmore;
  }
}
