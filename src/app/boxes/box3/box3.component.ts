import { Component, OnInit, OnDestroy } from '@angular/core';
import { BoxMessagesService } from 'src/app/services/box-messages.service';
import { Subscription } from 'rxjs';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-box3',
  templateUrl: './box3.component.html',
  styleUrls: ['./box3.component.scss']
})
export class Box3Component implements OnInit, OnDestroy {
  messageSubscribe: Subscription;
  number: number = 0;
  allMessages: string[] = [];
  productsSubscription: Subscription;


  constructor(
    private boxMessagesService: BoxMessagesService,
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.messageSubscribe = this.boxMessagesService
      .getMsgReplySubject()
      .subscribe((message) => {
        this.allMessages.push(message);
        console.log('%c this is from messgaeSubscription Box3:', 'background: pink; color: black', message)
      });
    // this.productsSubscription = this.productService
    //   .getProducts()
    //   .subscribe((products) => {
    //     console.log('%c this are Products from Box3:', 'background: pink; color: black', products)
    //   })
  }
  ngOnDestroy() {
    this.messageSubscribe.unsubscribe();
  }

}
