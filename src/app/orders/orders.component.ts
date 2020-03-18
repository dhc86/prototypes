import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../services/order.service';
import { Order } from '../models/order';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest'; // factory method for combining observables
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  orders: Array<Order>;
  loading: boolean = true;
  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .switchMap((combined)=> {
      let id = combined[0].get('id');
      let page = combined[1].get('page');
      return (id) ? this.orderService.getOrderForProduct(id) : this.orderService.getAllOrders()
    })
    .subscribe((orders)=> {
      // mocking the time it takes for api to reply
      setTimeout(()=>{
        this.orders = orders;
        this.loading = false;
      }, 1000);

    });
  }

}
