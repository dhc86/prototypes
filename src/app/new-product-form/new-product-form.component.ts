import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-new-product-form',
  templateUrl: './new-product-form.component.html',
  styleUrls: ['./new-product-form.component.scss']
})
export class NewProductFormComponent implements OnInit {
  @Output() submitProduct = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  submit(form) {
    this.submitProduct.emit(form.value);
  }
}
