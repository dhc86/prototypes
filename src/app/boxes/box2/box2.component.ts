import { Component, OnInit } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';
import { Subscription } from 'rxjs';
import { BoxMessagesService } from 'src/app/services/box-messages.service';

@Component({
  selector: 'app-box2',
  templateUrl: './box2.component.html',
  styleUrls: ['./box2.component.scss']
})
export class Box2Component implements OnInit {
  number: number;
  subscription: Subscription;
  messageSubscription: Subscription;
  message: string = 'No message yet!';
  constructor(
    private boxService: BoxService,
    private boxMessageService: BoxMessagesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.boxService.startCounter()
    .subscribe((num) => {
      this.number = num;
      console.log('%c number Box2 =', 'background: blue', num)
    });

    this.messageSubscription = this.boxMessageService
      .getMsgBehaviorSubject()
      .subscribe((message)=> {
        this.message = message;
        console.log('%c this is from messgaeSubscription Box2:', 'background: blue', message)
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }
}
