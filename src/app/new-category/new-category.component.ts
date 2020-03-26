import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.scss']
})
export class NewCategoryComponent implements OnInit {

  constructor(
    private categoryService: CategoryService) { }

  ngOnInit(): void {
  }

  submitCategory(form){
    // this.categoryService.createCategory(form.)
    console.log(form);
  }
}
