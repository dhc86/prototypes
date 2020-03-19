import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { NewProductComponent } from '../new-product/new-product.component';

@Injectable()
export class NewProductCanDeactivateService implements CanDeactivate<NewProductComponent>{

  constructor() { }

  canDeactivate(
    component: NewProductComponent):  boolean {
      if (component.createProductForm.dirty) {
        return confirm('are you sure you want to go back?');
      }
      return true;
  };
}
