import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ILivecard } from 'src/app/shared/model/auction.model';
import { IMessage } from 'src/app/shared/model/message.model';
import { NavigationService } from 'src/app/shared/services/liveNavigation.service';

@Component({
  selector: 'app-livebids',
  templateUrl: './livebids.component.html',
  styleUrls: ['./livebids.component.scss'],
})
export class LivebidsComponent implements OnInit {
  Chatmessages: IMessage[] = [];
  chatSwitch() {
    this.display = 'Chat';
    console.log(this.display);
  }
  bidSwitch() {
    this.display = 'Bid';
    console.log(this.display);
  }
  result!: ILivecard;
  display!: String;
  constructor(
    private Navigation: NavigationService,
    private formGroup: FormBuilder
  ) {}
  MessageForm = this.formGroup.group({
    Message: [''],
  });
  BidForm = this.formGroup.group({
    Bid: [''],
  });
  ngOnInit(): void {
    this.display = 'Chat';
    this.displayData();
  }
  displayData() {
    this.result = this.Navigation.getSharedData();
    sessionStorage.setItem('result', JSON.stringify(this.result));
    if (this.result == null) {
      this.result = JSON.parse(sessionStorage.getItem('result') as string);
      console.log(this.result);
    }
  }

  sendMessage() {
    let Message = this.MessageForm.value.Message as string;
    if (Message.trim() !== '') {
      const message: IMessage = {
        userType: 'Sender',
        message: Message,
        timestamp: new Date(), // Capture the current timestamp
      };
      this.Chatmessages.push(message);
      this.MessageForm.reset();
    }
  }
  sendBid() {
    let Bid = parseFloat(this.BidForm.value.Bid as string);

    if (Bid > this.result.Bid) {
      this.result.Bid = Bid;
    } 
    this.BidForm.reset();
  }
}
