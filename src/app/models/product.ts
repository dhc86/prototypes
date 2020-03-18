export class Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string
  weight: number;
  soldBy: string;
  quantity: number;
  isScanned: boolean;
  description: string;

  constructor(
      id: string, name: string, price: number, imageUrl: string, weight: number, soldBy: string, quantity: number, isScanned: boolean, description: string) {
      this.id = id;
      this.name = name;
      this.price = price;
      this.imageUrl = imageUrl;
      this.weight = weight;
      this.soldBy = soldBy;
      this.quantity = quantity;
      this.isScanned = isScanned;
      this.description = this.description;
  }

  removeUnit() {
      if (this.quantity > 0) {
          this.quantity--;
      }
  }

  addUnit() {
      if (this.quantity < 10) {
          this.quantity++;
      }
  }

  scanItem() {
      this.isScanned = true;
  }

  getWeight() {
      return this.quantity * this.weight;
  }

  getUnitPrice() {
      return this.price;
  }

  getTotalPrice() {
      return (this.soldBy === 'weight') ?
          this.quantity * this.price * this.weight :
          this.quantity * this.price;
  }

  toString(){
    return JSON.stringify(this);
  }
}
