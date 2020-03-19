import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  product: Product;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.product = this.route.snapshot.data['product'];
  }

  ngOnInit(): void {
    // no need for this since, we are getting using a resolver in the router!
    // this.route.paramMap.subscribe((paramsMap)=> {
    //   let id = paramsMap.get('id');
    //   this.productService.getProduct(id).subscribe((data)=> {
    //     this.product = data;
    //   })
    // })
  }

}
