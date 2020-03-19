import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent implements OnInit {
  @Output() refreshProducts =  new EventEmitter<any>();
  @ViewChild('productForm') public createProductForm: NgForm;

  constructor(
    private productsService: ProductService,
    private toastrService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  submitProduct(rawNewProduct){
    this.productsService.addProduct(rawNewProduct).subscribe((newProduct) => {
      this.toastrService.success("Product was created successfully!")
      this.refreshProducts.emit(newProduct);
    });

  }
}
