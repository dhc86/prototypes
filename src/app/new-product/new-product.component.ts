import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Output() refreshProducts =  new EventEmitter<any>();
  displayModal: boolean = false;
  constructor(
    private productsService: ProductService
  ) { }

  ngOnInit(): void {
  }

  openModal() {
    this.displayModal = !this.displayModal;
  }

  submitProduct(rawNewProduct){
    this.productsService.addProduct(rawNewProduct);
    this.refreshProducts.emit(rawNewProduct);
  }
}
