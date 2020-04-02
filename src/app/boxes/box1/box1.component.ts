import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoxService } from 'src/app/services/box.service';
import { tap, map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { BoxMessagesService } from 'src/app/services/box-messages.service';

@Component({
  selector: 'app-box1',
  templateUrl: './box1.component.html',
  styleUrls: ['./box1.component.scss']
})
export class Box1Component implements OnInit, OnDestroy {
  num: number = 0;
  message: string = 'No message yet';
  counter$: Observable<number> = this.boxService.startCounter();
  subcription: Subscription;
  messageSubscription: Subscription;

  constructor(
    private boxService: BoxService,
    private boxMessagesService: BoxMessagesService
  ) { }



  ngOnInit(): void {
    this.subcription = this.counter$
      .subscribe(
        (num)=> {
          this.num = num;
          console.log('%c number Box1 =', 'background: red', num)
        }
      )
    this.messageSubscription = this.boxMessagesService
      .getMsgSubject()
      .subscribe((data)=> {
        console.log('%c this is from messgaeSubscription Box1: ', 'background: red', data.message)
        this.message = data.message;
      })
  }

  ngOnDestroy() {
    this.subcription.unsubscribe();
    this.messageSubscription.unsubscribe();
  }

}
