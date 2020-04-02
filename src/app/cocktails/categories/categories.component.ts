import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  isLoading: boolean = true;
  categories: Category[];

  constructor(
    private categoryService: CategoryService
  ) { }

  ngOnInit(): void {
    this.categoryService.getAll().subscribe(
      (data) => {
        this.categories = data;
        this.isLoading = false;
      }),
      () => console.log('no more values')
  }

  ngOnDestroy() {
    // this.categoryService.getAll().
    console.log('destroying component');
  }

}
