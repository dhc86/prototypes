import { Component, OnInit } from '@angular/core';
import { CocktailService } from '../services/cocktail.service';
import { Cocktail } from '../models/cocktail';
import { IngredientService } from '../services/ingredient.service';
import { CategoryService } from '../services/category.service';
import { GlassService } from '../services/glass.service';

@Component({
  selector: 'app-cocktails',
  templateUrl: './cocktails.component.html',
  styleUrls: ['./cocktails.component.scss']
})
export class CocktailsComponent implements OnInit {
  cocktails: Cocktail[];
  isLoading: boolean = true;

  constructor(
    private cocktailService: CocktailService,
    private ingreadientService: IngredientService,
    private categoryService: CategoryService,
    private glassService: GlassService,
  ) { }

  ngOnInit(): void {
    this.cocktailService.getAllByLetter('a').subscribe((cocktails)=>{
      this.cocktails = cocktails;
      this.isLoading = false;
    });
    // testing the services!
    this.categoryService.getAll().subscribe(data => {
      console.log(data);
    })
    this.ingreadientService.getAll().subscribe(data => {
      console.log(data);
    })
    this.glassService.getAll().subscribe(data => {
      console.log(data);
    })
  }
}
