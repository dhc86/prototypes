export class Category {
  strCategory;

  constructor(strCategory: string){
    this.strCategory = strCategory;
  }
  getCategory(): string {
    return this.strCategory;
  }
}
