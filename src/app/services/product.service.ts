import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ProductService {
	products: Array<any> = [
		{ id: '1', name: 'Cheerios', price: 6.99, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. ' },
		{ id: '2', name: 'Apple', price: 2.49, imageUrl: 'www.image.com/url.3', weight: 0.33, soldBy: 'weight', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '3', name: 'Banana', price: 0.99, imageUrl: 'www.image.com/url.3', weight: 1.1, soldBy: 'weight', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '4', name: 'Cheese', price: 4.99, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '5', name: 'Pepsi', price: 2.50, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '6', name: 'Milk', price: 2.99, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '7', name: 'Broccoli', price: 2.60, imageUrl: 'www.image.com/url.3', weight: 0.5, soldBy: 'weight', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '8', name: 'Mango', price: 2.49, imageUrl: 'www.image.com/url.3', weight: 0.7, soldBy: 'weight', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '9', name: 'Eggs', price: 3.50, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '10', name: 'Coffee', price: 6.50, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '11', name: 'Water', price: 2.50, imageUrl: 'www.image.com/url.1', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  },
		{ id: '12', name: 'Sugar', price: 4.99, imageUrl: 'www.image.com/url.3', weight: 1, soldBy: 'unit', quantity: 10, isScanned: false , description: 'Arrival entered an if drawing request. How daughters not promotion few knowledge contented. Yet winter law behind number stairs garret excuse. Minuter we natural conduct gravity if pointed oh no. Am immediate unwilling of attempted admitting disposing it. Handsome opinions on am at it ladyship. '  }
	];

	constructor() { }

	getProducts() {
		// mock data by creating instances of Product class
		return of(this.products.map(
			(p: Product) => new Product(p.id, p.name, p.price, p.imageUrl, p.weight, p.soldBy, p.quantity, p.isScanned, p.description)
		));
	}

  getProduct(id: string) {
    let p: Product = this.products.filter(p => p.id === id)[0];
    return of( new Product(p.id, p.name, p.price, p.imageUrl, p.weight, p.soldBy, p.quantity, p.isScanned, p.description));
  }

	removeProduct(product: Product) {
		// remove a product from stock
		this.products = this.products.filter((p) => {
			if (p.id !== product.id) { return p; }
		});
	}

	addProduct(product: Product) {
    // return product to stock
    product['id'] = JSON.stringify(this.products.length + 1);
    product['isScanned'] = false;
		this.products.push(product);
	}
}
