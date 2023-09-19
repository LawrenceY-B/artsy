import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-drops',
  templateUrl: './drops.component.html',
  styleUrls: ['./drops.component.scss']
})
export class DropsComponent implements OnInit {
  notification:Boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  notify(x:HTMLImageElement){
    this.notification = !this.notification;
    if(this.notification){
      x.src="assets/svgs/bell-tick.svg"
      this.notification = true;
    }
    else if(!this.notification ){
      x.src="assets/svgs/bell-outline.svg"
    }
  }

}
