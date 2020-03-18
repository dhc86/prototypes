import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Array<Product>;
  loading: boolean = true;

  constructor(
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
    this.getPorducts();
  }

  getPorducts() {
    setTimeout(()=>{
      this.productsService
        .getProducts()
        // .pipe((data)=> data)
        .subscribe((data)=> {
        this.products = data;
        this.loading = false;
      })
    }, 1000);
  }

  refreshProducts(rawNewProduct) {
    console.log(rawNewProduct);
    this.getPorducts();
  }
}
