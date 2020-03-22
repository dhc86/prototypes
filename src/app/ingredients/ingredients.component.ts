import { Component, OnInit } from '@angular/core';
import { IngredientService } from '../services/ingredient.service';
import { Ingredient } from '../models/ingredient';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {
  isLoading: boolean = true;
  ingredients: Ingredient[];
  constructor(
    private ingredientService: IngredientService
  ) { }

  ngOnInit(): void {
    this.ingredientService.getAll().subscribe(data => {
      this.ingredients = data;
      this.isLoading = false;
    })
  }
}
