import { Component, OnInit } from '@angular/core';
import { BoxMessagesService } from 'src/app/services/box-messages.service';

@Component({
  selector: 'app-box-messages',
  templateUrl: './box-messages.component.html',
  styleUrls: ['./box-messages.component.scss']
})
export class BoxMessagesComponent implements OnInit {
  message: string = '';
  constructor(
    private boxMessageService: BoxMessagesService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(msg) {
    this.boxMessageService.sendMessageUsingSubject(msg);
    this.boxMessageService.sendMessageUsingBehaviorSubject(msg);
    this.boxMessageService.sendMessageUsingReplySubject(msg)
  }

  clearAllMessages() {
    this.boxMessageService.clearMessage();
  }
}
