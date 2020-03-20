import { Injectable } from '@angular/core';
import { plainToClass } from 'class-transformer';
import { Http, Response } from '@angular/http';
import { Cocktail } from '../models/cocktail';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {
  public path = '/api/products';

  constructor(
    private http: Http,
  ) { }

  getAllByLetter(letter: string): Observable<Cocktail[]> {
    return this.http
      .get(environment.apiUrl + `/search.php?f=${letter}`)
      .map((response: Response)=> {
        return response.json().drinks.map(drink => plainToClass(Cocktail ,drink));
      });
  }
}
