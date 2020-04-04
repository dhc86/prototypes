import { Component, OnInit, Inject } from '@angular/core';
import { IngredientService } from 'src/app/services/ingredient.service';

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.css']
})
export class SimpleFormComponent implements OnInit {
  serviceName: string;
  createdBy: string;
  constructor(
    private ingredientService: IngredientService,
    @Inject("MY_CONSTANT") createdBy: string ) {
      this.serviceName = this.ingredientService.getServiceName();
      this.createdBy = createdBy;
    }

  ngOnInit(): void  {

  }

  setServiceName(): void {
    this.ingredientService.setServiceName('Diegos Ingredients Sertvice');
    this.serviceName = this.ingredientService.getServiceName();
  }
}
