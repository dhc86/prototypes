export class Order {
  id: string;
  productId: string;
  date: string;

  constructor(
    id: string, productId: string, date: string) {
      this.id = id;
      this.productId = productId;
      this.date = date;
  }
}
