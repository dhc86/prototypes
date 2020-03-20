import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { Http, Response } from '@angular/http';
import { environment } from 'src/environments/environment';
import { plainToClass } from 'class-transformer';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: Http
  ) { }

  getAll(): Observable<Ingredient[]> {
    return this.http
      .get(`${environment.apiUrl}list.php?i=list`)
      .map((response: Response)=> {
        return response.json().drinks.map(category => plainToClass(Ingredient ,category));
      });
  }
}
