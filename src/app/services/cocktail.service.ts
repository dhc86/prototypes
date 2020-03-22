import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Cocktail } from '../models/cocktail';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {  map, tap } from 'rxjs/operators';
import { BaseHttpService } from './base-http.service';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  path: string = '/search.php'
  constructor(
    private baseHttpService: BaseHttpService
  ) { }

  getAll(letter: string): Observable<Cocktail[]> {
    let options: {} = {
      path: this.path + '?f=' + letter
    }
    return this.baseHttpService.getAll(options)
      .pipe(
        map((response: any)=> {
          return response.drinks.map(drink => plainToClass(Cocktail ,drink));
        })
      )
  }
}
