import { Component, Input, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-livecards',
  templateUrl: './livecards.component.html',
  styleUrls: ['./livecards.component.scss'],
})
export class LivecardsComponent implements OnInit {
  @Input() ImgUrl!: string;
  @Input() Product!: string;
  @Input() Artist!: string;
  @Input() Bid!: Number
  // @Input() Time!: Date;
  isSaved: boolean = false;
  intervalId:any;
  @Input() countdownHours!:number
  countdownSeconds!: number ;
  displayTime:string= '00 h : 00 m : 00 s';
  constructor() {}

  ngOnInit(): void {
    timer(1000, 7000).subscribe((x) => {
      const randomBid = this.getRandomBid();
      this.Bid = parseFloat((Number(this.Bid) + randomBid).toFixed(2)); // Ensure Bid has two decimal points
    });
    // timer(1000, 1000).subscribe((x) => {
    //   this.Time = new Date();
    // });
    this.countdownSeconds = this.countdownHours * 3600; // Convert hours to seconds
    this.startCountdown();

  }
 

  getRandomBid(): number {
    const rand = Math.random() * (0.009-0.001) + 0.01;
    return Math.round(rand * 100) / 100;
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
    this.displayTime = `${this.padZero(hours)}h : ${this.padZero(minutes)}m : ${this.padZero(seconds)}s`;
  }

  padZero(num: number): string {
    return num.toString().padStart(2, '0');
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
}
