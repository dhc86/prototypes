import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})

export class OrderService {
  orders: Array<any> = [
    { id: '1', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '2', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '3', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '4', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '5', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '6', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '7', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '8', productId: '1', date: '2020-03-05T05:52:08.766Z' },
		{ id: '9', productId: '2', date: '2020-03-05T05:52:08.766Z' },
		{ id: '10', productId: '2', date: '2020-03-05T05:52:08.766Z' },
    { id: '11', productId: '2', date: '2020-03-05T05:52:08.766Z' },
    { id: '12', productId: '2', date: '2020-03-05T05:52:08.766Z' },
		{ id: '13', productId: '2', date: '2020-03-05T05:52:08.766Z' },
		{ id: '14', productId: '2', date: '2020-03-05T05:52:08.766Z' },
		{ id: '15', productId: '2', date: '2020-03-05T05:52:08.766Z' },
		{ id: '16', productId: '2', date: '2020-03-05T05:52:08.766Z' },
		{ id: '17', productId: '3', date: '2020-03-05T05:52:08.766Z' },
		{ id: '18', productId: '4', date: '2020-03-05T05:52:08.766Z' },
		{ id: '19', productId: '5', date: '2020-03-05T05:52:08.766Z' },
		{ id: '20', productId: '5', date: '2020-03-05T05:52:08.766Z' },
		{ id: '21', productId: '6', date: '2020-03-05T05:52:08.766Z'},
		{ id: '22', productId: '6', date: '2020-03-05T05:52:08.766Z' },
		{ id: '23', productId: '6', date: '2020-03-05T05:52:08.766Z' }
  ]
  constructor() { }

  getAllOrders() {
    // mock data by creating instances of Product class
		return of(this.orders.map(
			(o: Order) => new Order(o.id, o.productId, o.date)
		));
  }

  getOrderForProduct(productId: string) {
    let orders: Array<any> = this.orders.filter(o => o.productId === productId);
    return of(orders.map((o: Order) => new Order(o.id, o.productId, o.date)));
  }
}
