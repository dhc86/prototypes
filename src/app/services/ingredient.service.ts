import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';
import { Ingredient } from '../models/ingredient';
import { environment } from 'src/environments/environment';
import { plainToClass } from 'class-transformer';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable({
  providedIn: 'root'
})
export class IngredientService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Ingredient[]> {
    return this.http
      .get<Ingredient[]>(`${environment.apiUrl}list.php?i=list`).pipe(
        map((response: any)=> {
          return response.drinks.map(category => plainToClass(Ingredient ,category));
        })
      )
  }
}
